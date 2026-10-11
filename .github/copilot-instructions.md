
---

### 1. Repository Structure

Keep dependencies minimal. A static bundle (HTML, modern CSS, lightweight vanilla JS) deploys natively to GitHub Pages without complex build pipelines.

```text
├── .github/
│   └── copilot-instructions.md   # Agent rules & design system
├── assets/
│   ├── css/
│   │   └── style.css             # Taskmaster palette & wax-seal styles
│   ├── js/
│   │   └── main.js               # Accordions, countdown, RSVP interactions
│   └── images/
│       ├── wax-seal.svg
│       └── envelope-bg.png
├── data/
│   └── tasks.json                # Pre-event tasks or agenda items
├── index.html                    # Single-page guest hub
└── README.md

```

---

### 2. Copilot Instructions File (`.github/copilot-instructions.md`)

Create this file in your root folder. Copilot Agent reads this automatically to govern its styling, tone, and component implementation.

```markdown
# Repository Guidelines: Taskmaster 40th Birthday Hub

## Project Objective
Build a fast, mobile-first, static website hosted on GitHub Pages to inform guests about an upcoming Taskmaster-themed 40th birthday celebration.

## Technical Constraints
- Pure static: Semantic HTML5, modern vanilla CSS, lightweight vanilla JS.
- No heavy frameworks (no React/Vue) to ensure zero-build deployment on GitHub Pages.
- Fully responsive across mobile, tablet, and desktop viewports.
- All external links (maps, calendars) must open securely in new tabs (`rel="noopener noreferrer"`).

## Theme & Aesthetic Requirements
- Visual Theme: Channel Channel 4's *Taskmaster* programme styling.
- Colour Palette:
  - Taskmaster Red: `#C8102E`
  - Seal Crimson / Dark Velvet: `#5B0612`
  - Aged Parchment: `#F7F2E7`
  - Gold / Brass Accents: `#C5A059`
  - Dark Charcoal / Ink: `#1A1A1A`
- Visual Motifs:
  - White letter envelopes with red wax seals.
  - Typefaces: Serif headings evoking vintage print (e.g., Courier Prime, Playfair Display, or typewriter styles) paired with clean sans-serif body text (e.g., Inter, Outfit).
  - Task cards bordered with dark borders and red ribbon cues.

## Tone of Voice
- Official, slightly pompous, and authoritarian Taskmaster tone ("Your time starts now", "All information is final").

## Essential Sections to Generate
1. **The Brief (Hero):** Event title ("Alex Horne's Assistant cordially summons you to..."), recipient name placeholder, and countdown timer.
2. **The Rules (Essential Logistics):**
   - Date, Arrival Window, and Curfew.
   - Venue coordinates / address and transport advice.
   - Dress code instructions (e.g., "Sensible shoes for nonsensical activities").
3. **The Tasks (Schedule & Format):**
   - Interactive accordion or expandable task cards detailing what to expect (Prize Task submissions, team rounds, solo challenges).
4. **The Rations (Food & Drink):**
   - Dietary requirements notification and bar details.
5. **The Final Judgement (RSVP):**
   - Embedded form or interactive submission link with a strict RSVP deadline.

```

---

### 3. Execution Prompts for Copilot Agent

Open Copilot Chat in VS Code (`Ctrl+Alt+I` / `Cmd+Option+I` or via sidebar), switch the mode dropdown to **Agent**, and feed the tasks in sequence:

#### Prompt 1: Scaffold & Layout

> "Read `.github/copilot-instructions.md`. Create `index.html` and `assets/css/style.css`. Scaffold the full semantic structure for the site including the Hero, Logistics ('The Rules'), Schedule ('The Tasks'), Food & Drink ('The Rations'), and RSVP sections. Use CSS variables for the Taskmaster colour scheme and ensure responsive flex/grid layouts."

#### Prompt 2: Taskmaster Styling & Interactive Elements

> "Add styling in `assets/css/style.css` to give the task sections the appearance of folded parchment envelopes with simulated red wax seals. Create `assets/js/main.js` with:
> 1. A countdown timer counting down to the event start.
> 2. An interactive reveal animation when a user clicks a 'Task Envelope' card to open the event details."
> 
> 

#### Prompt 3: Polish & Deployment Check

> "Review `index.html` to confirm all asset paths are relative (`./assets/...`) so they resolve properly under GitHub Pages subpaths. Ensure all accessibility attributes (`aria-expanded`, alt text) are set."

---

### 4. GitHub Pages Deployment Steps

1. Commit and push the repository to GitHub:
```bash
git add .
git commit -m "feat: complete taskmaster event portal"
git push origin main

```


2. Navigate to your repository on GitHub.com and open **Settings** -> **Pages**.
3. Under **Build and deployment** -> **Source**, select **Deploy from a branch**.
4. Set the branch to `main` and folder to `/ (root)`, then click **Save**.
5. Your site will be live at `https://<username>.github.io/<repo-name>/` in 1–2 minutes.