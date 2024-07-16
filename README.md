# WorkVillageHub.com

Welcome to the repository for WorkVillageHub.com, a job portal built with Next.js, Prisma, and Supabase. This README will guide you through the structure of the project and provide an overview of the various directories and their contents.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
  - [src/app/lib](#srcapplib)
    - [actions](#actions)
    - [data](#data)
    - [hooks](#hooks)
    - [prisma](#prisma)
    - [scraper](#scraper)
    - [supabase](#supabase)
    - [types](#types)
    - [ui](#ui)
    - [utils](#utils)
- [Contributing](#contributing)
- [License](#license)

## Introduction

WorkVillageHub.com is a job portal designed to connect job seekers with employers. The application is built using Next.js for the frontend framework, Prisma for database management, and Supabase for authentication and real-time capabilities.

## Getting Started

To get a local copy of the project up and running, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/workvillagehub.git
    cd workvillagehub
    ```

2.  **Install Dependencies:**

        ```

    npm install

        ```

3.  **Setup environment variables**
    Copy the .env.example and rename it to .env

4.  **Run the dev server**
    `npm run dev`

## Project Structure

workvillagehub/
├── public/
├── src/
│ ├── app/
│ │ ├── lib/
│ │ │ ├── actions/
│ │ │ ├── data/
│ │ │ ├── hooks/
│ │ │ ├── prisma/
│ │ │ ├── scraper/
│ │ │ ├── supabase/
│ │ │ ├── types/
│ │ │ ├── ui/
│ │ │ └── utils/
│ ├── pages/
│ ├── styles/
│ └── ...other folders
├── .env.example
├── README.md
├── package.json
└── ...other files

### `src/app/lib`

This directory contains the core logic and utilities for the application.

#### `actions`

Contains various action functions that are used throughout the application to handle different operations such as fetching data, submitting forms, etc.

#### `data`

Includes static data or configuration files that are used within the application.

#### `hooks`

Custom React hooks that encapsulate reusable logic, such as fetching data or managing state.

#### `prisma`

Contains Prisma-related files including the Prisma schema and database client configuration.

#### `scraper`

Houses web scraping scripts and utilities used to gather job data from external sources.

#### `supabase`

Contains configurations and utility functions for interacting with Supabase, including authentication and database operations.

#### `types`

Defines TypeScript types and interfaces used throughout the application to ensure type safety.

#### `ui`

This directory is dedicated to UI components.

- **components**: Contains reusable UI components.
- **buttons**: Specific directory for button components and related styles.

#### `utils`

Utility functions and helpers that are used across the application for various tasks such as formatting, validation, etc.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.
