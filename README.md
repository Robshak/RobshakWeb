# Robshak Personal Website

My personal website — a space for self-expression and leveling up my animation skills with Framer Motion.

👉 [Watch demo](https://robshak.com)

## 🛠 Tech Stack

This project is built with a modern frontend stack:

- **Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Styling**: [SCSS Modules](https://sass-lang.com/), [clsx](https://github.com/lukeed/clsx)
- **Animations**: [Motion](https://motion.dev/)
- **Linting & Formatting**: ESLint, Stylelint, Prettier

## 📂 Project Structure

The project follows the **Feature-Sliced Design (FSD)** methodology:

```
src/
├── app/          # App entry point, providers, global styles
├── pages/        # Page components (Main, Projects, ProjectPage)
├── widgets/      # Complex UI blocks (Hero, About, Footer)
├── entities/     # Business entities (Project, etc.)
├── shared/       # Shared UI kit, hooks, utils
└── public/       # Static assets
```

## 🏁 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Robshak/RobshakWeb.git
   ```
2. Navigate to the project directory:
   ```bash
   cd robshak-web
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the local development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Type-checks and builds the project for production.
- `npm run preview`: Previews the production build locally.
- `npm run typecheck`: Runs TypeScript type checking.
- `npm run eslint`: Lints JavaScript/TypeScript files.
- `npm run stylelint`: Lints SCSS/CSS files.
- `npm run validate`: Runs typecheck, eslint, and stylelint.

## 📄 License

This project is for personal use and demonstration purposes.
