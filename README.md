# 🏋️ FitLog — Workout Library

> A responsive workout library and lightweight workout log for browsing exercises, building daily workout plans, saving workouts, and keeping selections after refresh.

**Tech Stack:** Next.js 15 · React 19 · TypeScript · CSS · Lucide React · REST API · localStorage

🌐 **Live Demo:** https://fitlogworkout.netlify.app/

## 📌 Project Overview

FitLog provides a simple workout-planning experience: users can explore API-driven exercises, inspect instructions, sort workouts, build a plan of up to five exercises, save exercises, and keep their selections persistent with browser localStorage.

## ✨ Main Features

- 🏋️ Browse a workout library with API-driven exercise cards
- 📖 View detailed instructions for individual exercises
- 📊 Sort exercises by duration, calories, or rating
- 🎯 Build a daily plan with up to five exercises
- 🔥 Track selected exercise, minute, and calorie totals
- 💾 Save exercises for later
- 🔄 Persist workout plans and saved exercises with browser localStorage
- 🔔 Toast feedback for add, save, remove, and done actions
- 📱 Responsive design for desktop, tablet, and mobile
- 🌙 Dark-mode interface
- ⏳ Loading states and 404 handling

## 🛠️ Main Technologies

- **Next.js 15** — App Router and application framework
- **React 19** — UI components
- **TypeScript** — Type-safe development
- **CSS** — Responsive custom styling
- **Lucide React** — Interface icons
- **REST API** — Workout data
- **localStorage** — Client-side persistence

## 📦 Dependencies

### Production

```json
{
  "next": "^15.1.4",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "lucide-react": "^0.468.0"
}
```

### Development

```json
{
  "@types/node": "^22.10.5",
  "@types/react": "^19.0.3",
  "@types/react-dom": "^19.0.2",
  "typescript": "^5.7.2"
}
```

## 🚀 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/abrar-jaman-gazi/assignment-06.git
cd assignment-06
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

### 4. Create a production build

```bash
npm run build
npm start
```

## 🔌 API

The application uses the FitLog REST API:

- **All workouts:** https://api.abcz.workers.dev/api/fitlog
- **Single workout:** https://api.abcz.workers.dev/api/fitlog/:id

## 🔗 Relevant Links

- 🌐 **Live Demo:** https://fitlogworkout.netlify.app/
- 💻 **GitHub:** https://github.com/abrar-jaman-gazi/assignment-06
- 🔌 **API:** https://api.abcz.workers.dev/api/fitlog

## 👨‍💻 Author

**Abrar Jaman Gazi**

Computer Science Student — United International University (UIU)
