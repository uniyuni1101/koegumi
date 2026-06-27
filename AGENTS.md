# AGENTS.md

## Core Principles
1. READ FIRST: Always read at least 1500 lines to understand context fully.
2. BETTER USE SKILLS: Always search ai agent skills.
2. DELETE MORE THAN YOU ADD: Complexity compounds into disasters.
3. FOLLOW EXISTING PATTERNS: Don't invent new approaches.
4. PLAN TODO BEFORE RUN: Maintain a detailed TODO list of 20+ items before starting development.
5. BUILD AND TEST: Run linting, formatting, check, and test commands after every change.
6. COMMIT FREQUENTLY: Commit every 5-10 minutes for meaningful progress.

## MUST RULES
### THE 1500-LINE MINIMUM READ RULE - THIS IS NOT OPTIONAL
Please read at least 1500 lines of source code or relevant documentation at a time. Do not do partial reads. This ensures you fully comprehend the delicate logic of the codebase and avoids creating duplicate functions or redundant logic.

Once you have read the full codebase files, you have the complete context and do not need to re-read them.

### YOUR 20-POINT TODO LIST - YOU NEED THIS STRUCTURE
Always maintain a structured TODO list of 20+ items in your current task context. This prevents you from losing track, skipping important validations, or repeating work.
If Antigravity is Use artifact
```
1. [ ] Read Login.tsx FULLY (1500+ lines) - you'll understand the whole flow
2. [ ] Remove at least 50% of redundant code - it's there, you'll see it
3. [ ] Run bun build - this MUST pass before moving on
4. [ ] Check localhost:XXXX works - use the RIGHT port from package.json
5. [ ] Run test.js if it exists - don't skip this
... (keep going to 20+ or you'll lose context like lesser models do)
```

### !IMPORTANT! Better Thinking English and response Japanese.
Please think in English and reply in Japanese.

#### japanse replay examples
- Commit messages
- Source Code Comment
- docs
- Conversation Response

### ALWAYS REVIEW DESIGN.md FOR UI WORK
Always review [DESIGN.md](./DESIGN.md) before implementing or modifying any user interface components to ensure compliance with the visual theme and component specifications.

## Project Structure

We follow a modular, feature-based project architecture inspired by **Bulletproof React** and **TanStack Router**.

```text
src/
├── routes/               # TanStack Router file-based route definitions
├── router.tsx            # TanStack Router instance creation and registration
├── main.tsx              # Client-side React hydration entry
├── core/                 # UI-independent Core Systems
│   ├── project_manager/  # Project file management (.koegumi files)
│   ├── audio_engine/     # Audio track engine, audio exports
│   └── [system-name]/    # [system_name], UI-independent Core Systems
├── features/             # Feature-based modular business logic
│   └── [feature-name]/
│       ├── api/          # Feature API request declarations and query hooks
│       ├── components/   # Feature-specific React UI components
│       ├── hooks/        # Feature-specific hooks
│       ├── types/        # Feature-specific TypeScript types
│       └── utils/        # Feature-specific utility functions
├── components/           # Reusable shared UI components
│   └── ui/               # Basic primitives (Buttons, Modals, Inputs)
├── hooks/                # Shared custom React hooks
├── styles/               # Global CSS files and stylesheets
├── types/                # Shared TypeScript types
└── utils/                # Pure utility functions
```

### Unidirectional Data Flow Rule
All imports must follow a strict unidirectional architecture:
**shared/core → features → routes**
- Features can import from `core` and `components`/`hooks`/`utils` (shared).
- Features must NOT import from other features directly; composition happens at the application/route level (`src/app/routes`).
- Shared modules and `core` systems must NOT import from features or app.

## Commands

Use the following scripts during development:
- Run development server: `pnpm dev`
- Production build: `pnpm build`
- Run test suite: `pnpm test`
- Run browser test suite: `pnpm test:browser`
- Formatting code: `pnpm format`
- Linting code: `pnpm lint:fix`
- Complete lint & format check: `pnpm check`