  # Alt Design Tech Test - DNS Landing Page

  PRODUCTION DEPLOY

  https://alt-design-tech-test.netlify.app/

  A React/TypeScript implementation of the DNS Document Network Services landing page, built as a
  technical assessment for Alt Design.

  ## Tech Stack

  - React 18 with TypeScript
  - Vite for development and building
  - TailwindCSS for styling
  - Vitest for testing

  ## Key Features

  - Recreation of the provided design
  - Interactive contact form with email and UK phone validation
  - Toast notifications for user feedback
  - Dynamic testimonial carousel (auto-play with navigation dots)
  - Dynamic FAQ section (expandable/collapsible items)
  - Service cards with hover effects
  - Deployed via CI/CD with github actions and netlify

  ## Getting Started

  ### Prerequisites

  - Node.js (v18 or higher)
  - npm or yarn package manager

  ### Installation

  bash
  # Clone the repository
  git clone [repository-url]

  # Navigate to project directory
  cd alt-design-tech-test

  # Install dependencies
  npm install

  Development

  # Start development server
  npm run dev

  # Run tests
  npm run test

  # Build for production
  npm run build

  # Preview production build
  npm run preview

  Project Setup (from scratch)

  If you want to recreate this project setup:

  # Create Vite project with React and TypeScript
  npm create vite@latest alt-design-tech-test -- --template react-ts

  # Install TailwindCSS
  npm install -D tailwindcss postcss autoprefixer @tailwindcss/vite
  npx tailwindcss init -p

  # Install Vitest for testing
  npm install -D vitest happy-dom

  Form Validation

  The contact form includes:
  - Required field validation
  - Email format checking
  - UK phone number validation (supports +44, 0121, etc.)
  - Custom error messages via toast notifications

  Development Notes

  - Built with component-based architecture
  - TypeScript for type safety
  - Responsive design principles
  - Clean, maintainable code structure

  ---Technical Assessment Submission for Alt Design
