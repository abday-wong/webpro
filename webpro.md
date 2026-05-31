You are an expert full-stack web developer. Build me a complete personal profile WEBSITE (pure HTML, CSS, and vanilla JavaScript — NO frameworks, NO build tools, NO npm) for "Abday Wong" — a Flutter developer and UI/UX enthusiast based in West Java, Indonesia, the developer behind the YokNabung savings tracker app.

## IMPORTANT: THIS IS A WEBSITE NOT AN APP
- Output must be a static website: index.html + style.css + script.js
- Must run by simply opening index.html in a browser
- No Flutter, no React, no Vue, no build step required
- Fully responsive using CSS Grid and Flexbox
- Works on Chrome, Firefox, Safari, mobile browsers

## VISUAL STYLE — TRANSPARENT GLASSMORPHISM GRADIENT
- Background: animated mesh gradient (#0F0C29 → #302B63 → #24243E → #0F0C29), slowly shifting/animating with CSS keyframes
- Cards: frosted glass effect using backdrop-filter: blur(20px), background: rgba(255,255,255,0.08), border: 1px solid rgba(255,255,255,0.15), border-radius: 20px, box-shadow: 0 8px 32px rgba(0,0,0,0.3)
- Primary accent color: #7C3AED (violet/purple)
- Secondary accent color: #06B6D4 (cyan)
- Text primary: #FFFFFF
- Text secondary: rgba(255,255,255,0.65)
- Font: Import from Google Fonts — "Space Grotesk" for headings, "Inter" for body text
- Subtle grain/noise texture overlay on background using CSS
- Glowing hover effects on all interactive elements
- Smooth scroll behavior throughout the page

## RESPONSIVE BREAKPOINTS
- Mobile: max-width 600px — single column, hamburger menu
- Tablet: 601px to 1024px — 2 column grid where applicable
- Desktop: 1025px and above — full layout, sticky navbar

## FILE STRUCTURE
Commit these files separately:
1. index.html — main HTML structure with all sections
2. style.css — all styles including animations, glassmorphism, responsive
3. script.js — interactivity: scroll animations, hamburger menu, navbar highlight, typing effect, particle background, form handling

## WEBSITE SECTIONS (all in one page, smooth scroll)

### 1. NAVIGATION BAR
- Sticky top navbar with frosted glass background
- Logo on left: "AW" monogram with gradient text
- Nav links on right: Home, About, Projects, Skills, Contact
- Active section highlight as user scrolls
- Hamburger menu on mobile that slides in a glass panel from the right
- Subtle border-bottom glow on scroll

### 2. HERO SECTION
- Full viewport height (100vh)
- Centered content
- Animated floating particles in background (canvas-based using JavaScript)
- Large heading: "Hi, I'm Abday Wong 👋"
- Subtitle with typing animation cycling through: "Flutter Developer", "UI/UX Enthusiast", "Mobile App Creator", "Neo-Brutalist Design Lover"
- Short tagline: "Building beautiful, functional apps from West Java, Indonesia"
- Two CTA buttons side by side:
  - "View My Work" (solid gradient violet to cyan)
  - "GitHub" (glass outlined button linking to https://github.com/abday-wong)
- Scroll down indicator with bounce animation

### 3. ABOUT SECTION
- Section title: "About Me" with gradient underline accent
- Two column layout on desktop (single on mobile)
- Left: Large glassmorphism card with profile info, a placeholder avatar circle with initials "AW" styled with gradient
- Right: Bio text — "I'm a Flutter developer passionate about crafting beautiful mobile experiences. I specialize in Neo-Brutalist UI design and building apps that are both functional and visually striking. Currently based in West Java, Indonesia, I love turning complex problems into elegant solutions."
- Below bio: a row of stat cards (glass cards) showing: "1+ Apps Published", "5000+ Lines of Code", "100% Passion"

### 4. PROJECTS SECTION
- Section title: "My Projects"
- Project cards in a CSS Grid (3 cols desktop, 2 tablet, 1 mobile)
- Each card is glassmorphism with hover lift and glow effect
- Featured project card (larger, spanning full width or 2 cols):

  **YokNabung 💰**
  - Description: "A Neo-Brutalist savings tracker app built with Flutter. Features goal tracking, milestone roadmaps, streak system, gamification with EXP & levels, daily reminders, and beautiful dark/light mode."
  - Tags: Flutter, Dart, Provider, SharedPreferences, Neo-Brutalist UI
  - Links: GitHub button (https://github.com/abday-wong/yoknabung), View Details button
  - Stats row: 5700+ Lines, Multi-Platform, Local-First

- Additional placeholder project cards (2 more) with "Coming Soon" badge:
  - Card 2: "Project Alpha — A new mobile experience (Coming Soon)"
  - Card 3: "Web Portfolio — You're looking at it right now ✨"

### 5. SKILLS SECTION
- Section title: "Skills & Technologies"
- Two subsections side by side on desktop

  **Languages & Frameworks:**
  - Flutter / Dart — 90% (animated progress bar with glow)
  - HTML / CSS / JS — 80%
  - Firebase — 75%
  - Python — 60%

  **Tools & Design:**
  - Figma — 80%
  - Git & GitHub — 85%
  - VS Code — 90%
  - Neo-Brutalist Design — 95%

- Skill chips section below: cloud of pill-shaped glass chips for: Flutter, Dart, Provider, SharedPreferences, fl_chart, Firebase, REST API, Git, GitHub, Figma, CSS, HTML, JavaScript, Node.js, Responsive Design, UI/UX, Neo-Brutalism, Local Notifications, Image Picker, Google Fonts

### 6. CONTACT SECTION
- Section title: "Get In Touch"
- Centered layout with max-width 600px
- Glass card containing:
  - Short text: "Have a project in mind or just want to say hello? I'd love to hear from you."
  - Contact form with glass-styled inputs:
    - Name field
    - Email field
    - Subject field
    - Message textarea (4 rows)
    - Submit button with gradient and loading state
  - OR mailto fallback: form action="mailto:your@email.com"
- Below form: social links row with icons (using Unicode or SVG inline):
  - GitHub: https://github.com/abday-wong
  - Email: icon linking to mailto
  - LinkedIn: placeholder #

### 7. FOOTER
- Minimal frosted glass footer
- Center text: "Designed & Built by Abday Wong © 2025"
- Subtitle: "Made with 💜 in West Java, Indonesia"
- Back to top button (floating, glass circle, bottom right corner of page)

## JAVASCRIPT FEATURES (all in script.js)
1. Canvas particle animation in hero background — floating dots connected by lines, mouse parallax interaction
2. Typing animation cycling through developer titles in hero
3. Intersection Observer for scroll-triggered fade-in animations on all sections and cards
4. Sticky navbar with blur background on scroll + active link highlighting based on scroll position
5. Hamburger menu toggle with slide-in panel and overlay
6. Animated skill progress bars that fill when section enters viewport
7. Smooth scroll to section on nav link click
8. Back to top button appears after scrolling 300px
9. Form submission handler with basic validation and visual feedback
10. Floating particles with mouse interaction in hero

## CSS ANIMATIONS TO INCLUDE
- @keyframes gradientShift — slowly animates the background gradient position
- @keyframes fadeInUp — elements slide up and fade in on scroll
- @keyframes float — hero elements gently floating
- @keyframes typing — cursor blinking for typing effect
- @keyframes bounce — scroll indicator bouncing arrow
- @keyframes glowPulse — pulsing glow on CTA buttons
- @keyframes particleFloat — for any CSS-based floating elements
- Card hover: transform translateY(-8px) + box-shadow glow increase
- Button hover: gradient shift + slight scale up + glow

## GIT COMMIT INSTRUCTIONS — VERY IMPORTANT
After completing each file, immediately run these exact git commands in the terminal:

After creating index.html:
git init
git remote add origin https://github.com/abday-wong/webpro.git
git add index.html
git commit -m "feat: add main HTML structure with all page sections"
git push -u origin main

After creating style.css:
git add style.css
git commit -m "feat: add full CSS with glassmorphism, gradient, animations, and responsive layout"
git push origin main

After creating script.js:
git add script.js
git commit -m "feat: add JavaScript for particles, typing effect, scroll animations, navbar, and interactions"
git push origin main

Final commit:
git add .
git commit -m "feat: complete personal profile website with glassmorphism design for Abday Wong"
git push origin main

## QUALITY REQUIREMENTS
- All CSS must be valid and have no redundant rules
- JavaScript must have no console errors on load
- Website must score above 90 on Lighthouse performance
- All images are replaced with CSS gradient placeholders or SVG — no external image dependencies
- All external resources (Google Fonts) loaded via link tag in head
- Meta tags for SEO: title, description, og:title, og:description, viewport
- Favicon: inline SVG or emoji favicon
- Website must look polished and professional — this is a real portfolio site

Now start building. Create index.html first with the complete HTML structure, then style.css with all styles, then script.js with all interactivity. Commit to https://github.com/abday-wong/webpro.git after each file is complete.