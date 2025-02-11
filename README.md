# EBUDDY Technical Test Solution

A repository contains the implementation of the EBUDDY technical test, including both frontend and backend components.

## Prerequisites

- Node.js v20 or higher
- pnpm v9.15.5 or higher
- Firebase CLI
- Firebase Emulator Suite

## Project Structure

```
root/
├── apps/
│   ├── backend-repo/  # Express.js backend
│   └── frontend-repo/ # Next.js frontend
├── packages/
│   └── shared/ # Shared types and utilities
└── package.json
```

## Getting Started

1. Install Firebase CLI (if you haven't):

```bash
npm install -g firebase-tools
```

2. Install dependencies from the root directory:

```bash
pnpm install
```

## Running the Project

### Development Mode

To run both frontend and backend:

```bash
npm run dev
```

To run Firebase emulators:

```bash
npm run start:emulators
```

This will start:

- Frontend at http://localhost:3000
- Backend at http://localhost:9000
- Firebase Emulator UI at http://localhost:4000

## Available Scripts

- `npm run dev` - Run all services in development mode
- `npm run build` - Build all applications
- `npm run lint` - Lint all applications
- `npm run format` - Format code using Prettier
- `npm run start:emulators` - Start Firebase Emulator
