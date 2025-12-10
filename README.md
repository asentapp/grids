<h1 align="center">Asent Developer Challenge</h1>

### Overview

This challenge is about building real software: clean architecture, predictable data flow, solid API interaction, and a UI that feels intentional. You’ll start with a simple leads table in a Next.js app and turn it into something that feels like it belongs in a production environment.

We care just as much about *how* you build as *what* you build.
<br />

# The What?

Take the existing weird looking and raw leads view and evolve it into a robust, high-quality data experience.
<br />
<img src="./images/table.png" alt="Table Screenshot" width="1280"/>
<br />
### Core Requirements

You’re taking the barebones leads table and turning it into something that feels genuinely usable. Here’s what we expect:

- **Interaction Layer**  
  A proper table experience: a toolbar that shows up when rows are selected, bulk actions, real filtering options, multi-column sorting, inline edits, and interactions that don’t feel clunky.

- **Data Model & API**  
  Extend the Lead type with useful fields (status, priority, timestamps, tags, etc.). Wire up full CRUD against your MockAPI backend. The request flow should be predictable and not a mystery box.

- **State & Logic**  
  Handle loading, errors, and edge cases cleanly. Add caching so the table doesn’t refetch unnecessarily. Add a refresh mechanism. Use optimistic updates only if they actually improve the experience.

- **Performance**  
  Virtualize the rows so the table holds up with thousands of items. Keep renders efficient. Use memoization where it helps, not everywhere out of habit.

- **UX Polish**  
  Make it pleasant. Good spacing, readable columns, intuitive controls, clear feedback when things change, and no awkward flickers or jumps.

- **Code Quality**  
  Keep the components small and understandable. Write real TypeScript, not `any`-driven chaos. Structure things so another developer could jump in without crying.

---

### Useful References

These aren’t templates to copy — just solid places to learn patterns and see how others approached similar problems:

- TanStack Table: https://tanstack.com/table/latest  
- TanStack Virtual: https://tanstack.com/virtual/latest  
- shadcn/ui Data Table example: https://ui.shadcn.com/docs/components/data-table  
- tablecn (for inspiration around filtering, toolbars, etc.): https://github.com/sadmann7/tablecn


## What we are looking for

We want to see how you think and how you build. Can you break a messy problem into clean pieces, choose an architecture that actually makes sense, and know when performance matters instead of randomly over-engineering? Can you design something that works end to end, handles real-world edge cases, and feels good for actual users? Most importantly, can you explain your decisions clearly instead of hiding behind buzzwords.
<br />

# Getting Started

### 1. Fork the repository

Create your own fork of the project on GitHub.

### 2. Clone your fork

```bash
git clone https://github.com/asentapp/grids.git
cd grids

```

### 3. Install dependencies

```bash
npm install

# or 

pnpm install

# or

bun install
```

### 4. Set up MockAPI

Create a `leads` resource with at least:

```tsx
interface Lead {
  id: string;
  company: string;
  email: string;
  website: string;
  address: string;
  phone: string;
  // Add your extended fields here
}

```

Take a look at `.env.example` and add your endpoint to `.env.development.local` 

```
MOCKAPI_URL=https://YOUR_PROJECT_ID.mockapi.io/leads
```

### 5. Run the project

```bash
npm run dev

# or 

pnpm run dev

# or

bun run dev
```
<br />

# How to Submit

Keep it simple:

1. **Fork the repo**
2. **Build your solution directly on your fork**
3. **Record a 5–10 minute walkthrough video** explaining:
    - Your architecture decisions
    - How your system works
    - Any trade-offs or limitations
    - A demo of the finished features
4. **Push all your code to your fork**
5. **Put the video link here : _________________ (edit the** `README.md`**)**
6. **Send us the link to your GitHub fork + your video**

No branches, no PRs. Your fork *is* your submission.
