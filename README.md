# Email Builder

A modern email template builder built with React Email and Tailwind CSS. This project allows you to create, preview, and export beautiful email templates using React components.

## Features

- 🎨 Modern UI with Tailwind CSS
- 📧 React Email integration
- 🔥 Hot reloading for development
- 📱 Responsive email templates
- 🎯 TypeScript support

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- pnpm (v10.7.1 or later)

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start the development server
pnpm dev
```

## Project Structure

```
email-builder/
├── emails/           # Email templates
├── lib/             # Utility functions and shared code
│   └── utils/       # Helper functions and constants
├── node_modules/    # Dependencies
├── .gitignore      # Git ignore rules
├── package.json    # Project configuration and dependencies
├── postcss.config.js # PostCSS configuration
├── tsconfig.json   # TypeScript configuration
└── eslint.config.mjs # ESLint configuration
```

## Available Scripts

- `pnpm dev` - Starts the development server with hot reloading
- `pnpm test` - Runs tests (currently not configured)

## Dependencies

### Main Dependencies
- `@react-email/components` - React Email components
- `react` - React library
- `react-dom` - React DOM
- `clsx` - Utility for constructing className strings
- `tailwind-merge` - Utility for merging Tailwind CSS classes

### Development Dependencies
- `react-email` - Email development framework
- `tailwindcss` - CSS framework
- `@types/react` - TypeScript definitions for React
- `@types/node` - TypeScript definitions for Node.js

## License

ISC 