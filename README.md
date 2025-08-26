# Portfolio Site

A modern portfolio website for Zachary Donhauser showcasing full-stack software engineering projects. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, minimalist design with geometric elements and gradients
- **Interactive Project Gallery**: Showcases featured projects with detailed modals
- **Responsive Layout**: Optimized for desktop and mobile viewing
- **Image Carousels**: Multiple project screenshots with smooth navigation
- **Tech Stack Display**: Organized presentation of technical skills and tools

## Tech Stack

- **Framework**: Next.js 15.4.5 with App Router
- **Runtime**: React 19.1.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.3
- **Build Tool**: Turbopack (development)
- **Deployment**: Optimized for static hosting

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Home page component
└── components/
    ├── ProjectCard.tsx     # Individual project cards
    ├── ImageCarousel.tsx   # Image carousel component
    └── ProjectModal.tsx    # Project detail modal
```

## Featured Projects

The portfolio showcases several key projects:

- **ZDTs Amusement Park Website** - Modern e-commerce site built with Shopify Hydrogen
- **Point of Sale System** - Custom POS system with Electron and React
- **Kitchen Display System** - Real-time order management with WebSockets
- **Employee Time Tracking** - Comprehensive time clock and management system
- **Membership Management** - Subscription and access control system
- **Mobile Party Booking PWA** - Progressive web app for event booking

## Requirements

- Node.js 18.18.0 or higher
- npm, yarn, pnpm, or bun package manager