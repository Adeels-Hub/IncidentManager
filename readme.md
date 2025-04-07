# IncidentManager

IncidentManager is a web application designed to manage and display incidents across various locations. Built with React and TypeScript, it leverages Vite for bundling and Tailwind CSS for styling.

## Table of Contents

- [IncidentManager](#incidentmanager)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Building for Production](#building-for-production)
  - [Deployment](#deployment)
  - [Project Structure](#project-structure)
  - [License](#license)

## Features

- **Incident Management**: View and filter incidents by location.
- **Responsive Design**: Optimized for various screen sizes using Tailwind CSS.
- **Mock API Integration**: Utilizes a fake API for demonstration purposes.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Adeels-Hub/IncidentManager.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd IncidentManager
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

## Development

To start the development server:

```bash
npm run dev
```

This will launch the application at `http://localhost:5173/`. The server supports hot module replacement, so any changes you make will be reflected in real-time.

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be in the `dist` directory.

## Deployment

The project is configured for deployment on GitHub Pages. To deploy, pull code from feature/AddGitHubDeploymentSupport branch.

1. **Build the Project**:

   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**:

   ```bash
   npm run deploy
   ```

## Project Structure

```
IncidentManager/
├── src/
│   ├── api/
│   │   ├── fake-api.js│   │   
│   ├── assets/
│   │   └── ... (static assets)
│   ├── components/
│   │   ├── IncidentTable.tsx
│   │   └── ...
│   ├── hooks/
│   │   ├── useIsMobile.ts
│   │   └── ...
│   ├── styles/
│   │   └── index.css
│   ├── App.tsx│   
│   └── ...
├── public/
│   ├── favicon.ico
│   └── ...
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

- **src/**: Contains the main source code.
  - **api/**: Includes the mock API (`fake-api.js`).
  - **assets/**: Static assets like images and icons.
  - **components/**: React components used throughout the application.
  - **hooks/**: Custom React hooks.
  - **styles/**: CSS files, primarily for Tailwind CSS.
- **public/**: Public assets like the favicon.
- **Configuration Files**: Various config files for TypeScript, Vite, Tailwind CSS, and PostCSS.

## License

This project is licensed under the [MIT License](LICENSE).

