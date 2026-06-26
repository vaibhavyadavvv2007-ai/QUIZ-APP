# Quiz App

A simple React quiz app built with Vite and Tailwind CSS. The app presents a short multiple-choice geography quiz, tracks the score, and shows a completion screen with the final result.

## Features

- Multiple-choice quiz with 5 questions
- Score tracking as you answer
- Correct and incorrect answer feedback
- Next-question navigation
- Final result screen with restart option
- Responsive UI built with Tailwind CSS

## Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- ESLint

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project Structure

```text
quiz-app/
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |   |-- Navbar.jsx
|   |   `-- herosection.jsx
|   |-- App.jsx
|   |-- App.css
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- package.json
|-- vite.config.js
`-- README.md
```

## How It Works

- `Navbar` renders the top navigation bar.
- `Herosection` contains the quiz logic, including question state, scoring, answer selection, and restart behavior.
- `App.jsx` brings the main components together.

## Notes

- The quiz currently focuses on continent-based general knowledge questions.
- The app is set up as a front-end project and does not require a backend to run.

## License

No license has been added yet.
