# Nestjs + React-TS + SSR

This is a full-stack application built with a NestJS backend and a React frontend that supports Server-Side Rendering (SSR). The project is written in TypeScript and managed as a pnpm monorepo to streamline dependency management and development workflows.

## 🚀 Tech Stack

### Backend
- **Framework:** [NestJS](https://nestjs.com/)
- **Language:** TypeScript
- **Testing:** [Vitest](https://vitest.dev/)
- **Linting:** [Oxlint](https://oxlint.dev/)

### Frontend
- **Library:** [React](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Rendering:** Server-Side Rendering (SSR) via Express
- **Language:** TypeScript
- **Linting:** ESLint

### Infrastructure
- **Package Manager:** [pnpm](https://pnpm.io/)
- **Architecture:** Monorepo

## 📁 Project Structure

```text
sample-nestjs-react-ssr/
├── backend/
│   └── nest-app/       # NestJS API application
├── frontend/
│   └── react-app/      # React SSR application
├── package.json        # Root package configuration and workspace scripts
└── pnpm-workspace.yaml # pnpm monorepo configuration
```

## 🛠️ Getting Started

### Prerequisites

Ensure you have [pnpm](https://pnpm.io/installation) installed on your machine.

### Installation

Install dependencies for the entire workspace:

```bash
pnpm install
```

### Development

Run both the backend and frontend in parallel for local development:

```bash
pnpm dev
```

### Build

Build all projects in the workspace:

```bash
pnpm build
```

### Testing & Linting

Run tests across the workspace:

```bash
pnpm test
```

Run linting across the workspace:

```bash
pnpm lint
```

## 📝 License

This project is licensed under the MIT License.
