# REM Waste - React Coding Challenge 🚛♻️

A responsive React application built as part of a front-end coding challenge. The project fetches and displays available skip bins by location, allowing users to view and select skip sizes suited for their waste disposal needs.

🔗 **Live Demo**: [https://remwaste247.netlify.app/](https://remwaste247.netlify.app/)  
💻 **GitHub Repo**: [https://github.com/mussieh/REM-Waste.git](https://github.com/mussieh/REM-Waste.git)

---

## 📸 Preview

![screenshot](https://github.com/mussieh/REM-Waste/blob/main/src/assets/images/skip-page.png) <!-- Replace with your actual screenshot URL or delete this section -->

---

## 🚀 Features

- ✅ Fetches skips by location using the REM Waste API
- 🔁 Retry logic for better reliability on API failure
- 📱 Responsive design (mobile + desktop)
- 🎨 Animated transitions using Framer Motion
- 🧠 State management using React Context for selected skip
- 🧪 Error handling with retry button
- 🧾 Action bar with summary of selected skip
- 📦 Modular and reusable component structure

---

## 🧠 My Approach

### 🧩 Component Structure

- Built reusable components: `Nav`, `SkipCard`, `ActionBar`, `Loader`, `ErrorCard`, `MobileNav`
- Separated logic from UI for clean architecture and maintainability

### 🔄 Data Fetching with Retry

- Created a `retry` utility that attempts fetch calls up to 3 times with a 1.5-second delay
- Gracefully displays an error message and retry button when all attempts fail

### 🎬 Animations

- Used `motion/react` to enhance user experience with smooth entrance/exit animations
  - List animations
  - Action bar slide-in/out
  - Responsive mobile navigation transitions

### 📱 Responsiveness

- Mobile-first design using Tailwind CSS
- Dynamic button labels (e.g. “days” vs “day hire”) based on screen width

---

## 🛠️ Tech Stack

- **Framework:** React (with Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (React 18-compatible)
- **Icons:** Lucide React
- **Hosting:** Netlify

---

## 🧪 Getting Started Locally

### 🔃 Clone the Repository

```bash
git clone https://github.com/mussieh/REM-Waste.git
cd REM-Waste
```

## 📦 Install Dependencies
```bash
npm install
```

## 🚀 Run the App
```bash
npm run dev
```

## 💡 Credits
Designed and developed by Mussie Habtemichael. Built as a front-end challenge for REM Waste.


