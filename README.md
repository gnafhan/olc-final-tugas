# OLC React Boilerplate

This document is a boilerplate for OLC Software Engineering 2023 that provides an overview of the React boilerplate project, which includes TypeScript, Tailwind CSS, ESLint, Husky, React Router, and React Query. This boilerplate is ideal for starting a scalable and maintainable web application with best practices in place.

## Project Structure

```
my-app/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   ├── types/
│   ├── hooks/
│   ├── utils/
│   ├── App.tsx
│   ├── index.tsx
│   └── react-app-env.d.ts
├── package.json
```

### Key Directories and Files

- `src/components/`: Contains reusable UI components like `Navbar`.
- `src/pages/`: Holds the main page components like `Home` and `About`.
- `src/types/`: Place for TypeScript type definitions and interfaces.
- `src/hooks/`: Custom React hooks for shared logic across components.
- `src/utils/`: Utility functions that can be used throughout the app.
- `src/App.tsx`: The main app component, setting up the routing using React Router.
- `src/index.tsx`: The entry point for the app, setting up React Query and rendering the `App` component.

## Custom Hooks

Custom hooks in React allow you to extract component logic into reusable functions. For example, `useExampleHook.tsx` in the `hooks` directory could be a custom hook for fetching data.

### Example: `useExampleHook.tsx`

```tsx
import { useState, useEffect } from 'react';

const useExampleHook = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data and set it
    setData("Fetched Data");
  }, []);

  return data;
};

export default useExampleHook;
```

### Using `useExampleHook` in a Component

```tsx
// In a component file
import React from 'react';
import useExampleHook from './hooks/useExampleHook';

const ExampleComponent: React.FC = () => {
  const data = useExampleHook();

  return <div>{data}</div>;
};
```

## Setup and Installation

1. **Install Dependencies:**
   Run `npm install` to install all the required dependencies.

2. **Start the Development Server:**
   Use `npm start` to start the local development server.

## Features

- **TypeScript**: Provides type safety across the app.
- **Tailwind CSS**: For utility-first styling.
- **ESLint**: To enforce code quality standards.
- **Husky**: Implements pre-commit hooks for code quality checks.
- **React Router**: Manages navigation within the application.
- **React Query**: Handles data fetching, caching and state management.

## Usage

### Running the Application

- Start the development server:
  ```bash
  npm start
  ```

### Navigation

- Use the `Link` component from `react-router-dom` for navigation.
- Example usage in `Navbar.tsx` and `Home.tsx`.

### Adding New Pages

1. Create a new file in `src/pages/`.
2. Add the route in `src/App.tsx`.

### Customizing Styles

- Tailwind CSS can be customized in `tailwind.config.js`.
- Use Tailwind utility classes in component files.

## Contributing

Contributions to this project are welcome. Please ensure to follow the existing coding standards and commit message conventions.

