# Commods Visualizer Hub

A web application for visualizing commodity market data. This project allows users to view, analyze, and stay updated with the latest trends in the commodities market. It features an interactive interface with charts and detailed information for various commodities.

## Technologies Used

This project is built with a modern tech stack:

-   **Vite**: For fast development and optimized builds.
-   **React**: For building the user interface.
-   **TypeScript**: For static typing and improved code quality.
-   **Tailwind CSS**: For utility-first styling.
-   **shadcn/ui**: For a set of reusable UI components.
-   **TanStack Query**: For efficient data fetching, caching, and state management.
-   **Recharts**: For creating interactive charts.
-   **React Router**: For client-side routing.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm/yarn/bun installed on your machine.

### Installation & Setup

1.  **Clone the repository**
    ```sh
    git clone https://github.com/your-username/commods-visualizer-hub.git
    cd commods-visualizer-hub
    ```
    *Replace `your-username` with the actual GitHub username or organization.*

2.  **Install dependencies**

    You can use your preferred package manager (npm, yarn, or bun).

    Using npm:
    ```sh
    npm install
    ```

    Using bun:
    ```sh
    bun install
    ```

3.  **Run the development server**

    Using npm:
    ```sh
    npm run dev
    ```

    Using bun:
    ```sh
    bun run dev
    ```

    Open the URL provided by Vite in your browser (usually `http://localhost:5173`) to see the application.

## Build for Production

To create a production-ready build of the application, run the following command:

Using npm:
```sh
npm run build
```

Using bun:
```sh
bun run build
```

This command will generate a `dist` folder in the project root containing the optimized and minified files ready for deployment.

## Available Scripts

In the project directory, you can run the following scripts:

-   `npm run dev`: Runs the app in development mode with hot-reloading.
-   `npm run build`: Builds the app for production to the `dist` folder.
-   `npm run preview`: Serves the production build locally to preview before deployment.
-   `npm run lint`: Lints the codebase using ESLint to identify and fix code quality issues.
