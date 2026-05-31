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
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const apiKey = process.env.VITE_CEREBRAS_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'Missing API key' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
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
