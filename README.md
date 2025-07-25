<img width="1895" height="905" alt="image" src="https://github.com/user-attachments/assets/2a4cd480-a4ee-464a-b742-6143f4f4c644" />

Overview
A modern ToDo application built with Next.js, TypeScript, and Tailwind CSS featuring:

Smooth splash screen animation

Interactive ToDo list management

Responsive design

Client-side filtering

Page transitions

Features
✨ Splash Screen

Animated welcome screen with waving pen animation

Shows only once per browser session

Smooth fade-in/out transitions

📝 ToDo List

Fetch and display todos from JSONPlaceholder API

Filter by user ID

Filter by completion status

Pagination support

Responsive design

🔄 Page Transitions

Smooth animations between pages

Framer Motion powered effects

🎨 Styling

Tailwind CSS for utility-first styling

Custom animations and transitions

Purple-themed color scheme

Technologies Used
Frontend Framework: Next.js 14 (App Router)

Programming Language: TypeScript

Styling: Tailwind CSS

Animation: Framer Motion

Build Tool: Vite (via Next.js)

Package Manager: npm

Getting Started
Prerequisites
Node.js (v18 or later)

npm (v9 or later)

Installation
Clone the repository:

bash
git clone https://github.com/yourusername/todoapp-nextjs.git
Navigate to the project directory:

bash
cd todoapp-nextjs
Install dependencies:

bash
npm install
Running the Development Server
bash
npm run dev
Open http://localhost:3000 in your browser.

Building for Production
bash
npm run build
Starting Production Server
bash
npm start
Project Structure
text
todoapp/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   └── todos/
│       └── page.tsx
├── components/
│   ├── SplashScreen.tsx
│   ├── TodoList.tsx
│   ├── TodoFilters.tsx
│   └── PageTransition.tsx
├── types/
│   └── todo.ts
├── public/
│   └── images/
├── styles/
│   └── globals.css
└── README.md
