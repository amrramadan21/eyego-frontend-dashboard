# EyeGo Frontend Dashboard

A responsive frontend dashboard built as a technical assessment using Next.js, React, TypeScript, Tailwind CSS, and Redux Toolkit.

The application includes mock authentication, dashboard statistics, data visualization, a dynamic user table, export functionality, and a Docker-ready production setup.

## Features

- Mock user authentication
- Protected dashboard route
- Responsive dashboard layout
- Redux Toolkit for authentication state management
- Authentication persistence using localStorage
- User table with searching, sorting, and pagination
- Revenue visualization using Recharts
- Export filtered table data to Excel
- Export filtered table data to PDF
- Responsive sidebar and mobile-friendly layout
- Dockerized production configuration
- Git Flow based development workflow

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Redux Toolkit
- React Redux
- Recharts
- jsPDF
- jsPDF AutoTable
- write-excel-file
- Docker

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

Docker is optional if you want to run the application inside a container.

### Installation

Clone the repository:

```bash
git clone https://github.com/amrramadan21/eyego-frontend-dashboard.git
```

Navigate to the project directory:

```bash
cd eyego-frontend-dashboard
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

The root route automatically redirects to the login page.

## Mock Login Credentials

The application uses mock authentication for demonstration purposes.

```text
Email: admin@example.com
Password: 123456
```

After successful authentication, the user is redirected to the dashboard.

Authentication state is managed using Redux Toolkit and restored from localStorage when the application is refreshed.

## Dashboard

The dashboard provides an overview of sample business data through:

- Summary statistic cards
- Revenue chart
- User data table
- Responsive navigation sidebar

The interface is designed to work across desktop and smaller screen sizes using Tailwind CSS responsive utilities.

## Data Table

The user table is built using mock data and supports:

- Searching across user information
- Sorting by table columns
- Pagination
- Active and inactive user statuses
- Excel export
- PDF export

Export operations use the currently filtered and sorted dataset.

## Data Visualization

Revenue data is displayed using a responsive Recharts line chart.

The chart shows sample revenue performance across six months and includes an interactive tooltip for displaying individual values.

## State Management

Redux Toolkit is used to manage authentication state.

The authentication flow includes:

- Login action
- Logout action
- Authentication initialization
- Restoring the authenticated user from localStorage
- Protecting the dashboard from unauthenticated access

## Export Functionality

### Excel Export

Excel files are generated using `write-excel-file`.

The exported file contains the current filtered and sorted user data.

### PDF Export

PDF files are generated using `jsPDF` and `jsPDF-AutoTable`.

The exported PDF contains the same filtered and sorted table data.

## Docker

The project includes a multi-stage Docker configuration for running the Next.js application as a production container.

Next.js standalone output is enabled in `next.config.ts` to reduce the files required in the final production image.

Build the Docker image:

```bash
docker build -t eyego-dashboard .
```

Run the container:

```bash
docker run --rm -p 3000:3000 eyego-dashboard
```

Then open:

```text
http://localhost:3000
```

> Note: The Docker configuration is included as part of the project. Local container execution could not be fully verified on the development machine due to a Docker Desktop/WSL engine environment issue.

## Production Build

To create a production build without Docker:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Code Quality

Run ESLint using:

```bash
npm run lint
```

The project was checked using both:

```bash
npm run lint
npm run build
```

before final delivery.

## Implementation Approach

The application was developed feature by feature using a Git Flow style workflow.

The dashboard layout and responsive components were implemented first. Mock authentication was then added and connected to Redux Toolkit for centralized authentication state management.

The dashboard was extended with a searchable, sortable, and paginated user table. Recharts was used to provide responsive revenue visualization.

Excel and PDF export functionality was added to allow the currently filtered and sorted user data to be exported.

Finally, the application was prepared for production containerization using a multi-stage Dockerfile and Next.js standalone output. Additional responsive improvements and route handling were added during the final polishing stage.

## Git Workflow

Development was organized using separate feature branches, including:

- `feature/auth`
- `feature/data-table`
- `feature/charts`
- `feature/export`
- `feature/docker`
- `feature/final-polish`

Feature branches were merged into the `develop` branch through pull requests before final integration.

## Project Structure

```text
src/
├── app/
│   ├── dashboard/
│   ├── login/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── dashboard/
│   └── layout/
├── data/
│   └── users.ts
├── features/
│   └── auth/
└── store/
    ├── store.ts
    └── StoreProvider.tsx
```

## Author

Amr Ramadan