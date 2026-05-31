export const config = { runtime: 'edge' };

const CEREBRAS_URL = 'https://api.cerebras.ai/v1/chat/completions';

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  // Try both env var names — VITE_ prefix is for client builds, plain name is more reliable for Edge
  const apiKey = process.env.CEREBRAS_API_KEY || process.env.VITE_CEREBRAS_API_KEY || '';
  if (!apiKey.trim()) {
    return new Response(JSON.stringify({ error: 'Missing API key on server' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  const body = await req.text();

  const cerebrasRes = await fetch(CEREBRAS_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body,
  });

  return new Response(cerebrasRes.body, {
    status: cerebrasRes.status,
    headers: {
      'Content-Type': cerebrasRes.headers.get('Content-Type') || 'text/event-stream',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
