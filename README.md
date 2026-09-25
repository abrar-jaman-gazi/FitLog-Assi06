# FitLog — Workout Library

A responsive, dark-mode workout library and lightweight workout log built for the FitLog assignment. Browse twelve exercises, inspect full instructions, build a five-lift daily plan, save exercises for later, and keep your selections after refresh.

## Technologies
- Next.js 15 App Router
- React 19 + TypeScript
- CSS (responsive custom styling)
- Lucide React icons
- FitLog REST API
- Browser localStorage for persistence

## Key Features
1. Responsive workout library with a 3-column desktop grid.
2. API-driven workout cards and detail pages.
3. Sort library by duration, calories, or rating.
4. Five-lift Today's Plan with live exercise/minute/calorie metrics.
5. Saved-for-later tab with remove actions.
6. Toast feedback for add/save/remove/done actions.
7. Persistent plan and saved state using localStorage.
8. Responsive navigation, loading states, 404 handling, and deployment-safe App Router routes.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## API
- All workouts: https://api.abcz.workers.dev/api/fitlog
- Single workout: https://api.abcz.workers.dev/api/fitlog/:id

## Git history
The project is organized into meaningful implementation commits covering setup, styling, API/library, details, planning, and polish.
