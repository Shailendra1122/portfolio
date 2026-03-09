# Shailendra Pratap Singh - Portfolio

A modern, interactive, Linux-inspired Desktop/Terminal theme portfolio built with React and Tailwind CSS. It features a unique, desktop-like interface where sections of the portfolio are represented as draggable, resizable windows, along with mini-games in a retro terminal application.

## 🚀 Features

- **Linux Cyberpunk UI**: A dynamic and immersive desktop layout with a custom taskbar, desktop icons, and interactive application windows.
- **Interactive Apps**: Information is divided into logical "applications":
  - **Profile**: Introduction and personal info.
  - **Education**: Timeline of academic journey.
  - **Resume**: Technical skills and career info.
  - **Contact**: Reach out easily.
  - **Terminal Games**: Includes a CLI, Retro Snake game, and Brick Breaker directly in your browser.
- **Responsive Design**: Adapts beautifully to both desktop and mobile screens.
- **Smooth Animations**: Window opening/closing handled seamlessly.

## 💻 Tech Stack

- **Framework**: React (using Vite)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations / Interactions**: Framer Motion, React Draggable

## 📂 Project Structure

- `src/apps/` - Contains the individual application components (Profile, Resume, Terminal Games, etc.)
- `src/components/` - Contains core UI components like Desktop, Taskbar, Windows, and Icons.

## 🛠️ Setup & Execution

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone this repository (or download the source).
2. Open a terminal in the project directory.
3. Run the following command to install dependencies:

```bash
npm install
```

### Running the Project Locally

Start the Vite development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the portfolio.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

This will create a `dist` folder with the necessary static files to be deployed.
