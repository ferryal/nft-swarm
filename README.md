# NFT Marketplace - Production-Ready Frontend Application

A pixel-perfect, fully responsive NFT Marketplace UI built with modern web technologies, featuring a working 3D animation and comprehensive state management.

## 🎯 Project Overview

This project is a high-fidelity implementation of an NFT Marketplace design, created as part of a frontend engineering assessment. It demonstrates:

- **Design Fidelity**: Pixel-perfect recreation of the Figma design
- **Modern Stack**: React, TypeScript, Vite, Tailwind CSS, and Zustand
- **3D Graphics**: Real-time 3D animation using Three.js (no GIFs)
- **Responsive Design**: Fully functional across desktop, tablet, and mobile
- **Accessibility**: WCAG-compliant with keyboard navigation support
- **Performance**: Optimized with lazy loading and efficient state management

## 🛠 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 7.x
- **Styling**: Tailwind CSS 3.x with custom theme
- **State Management**: Zustand
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Icons**: React Icons
- **Fonts**: Work Sans & Space Mono (Google Fonts)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Navigate to the project directory:

```bash
cd nft-marketplace
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
nft-marketplace/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── NFTCard.tsx
│   │   ├── ArtistCard.tsx
│   │   ├── CollectionCard.tsx
│   │   ├── CategoryCard.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── FloatingNFT3D.tsx
│   │   └── index.ts
│   ├── sections/          # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── TrendingCollectionsSection.tsx
│   │   ├── TopArtistsSection.tsx
│   │   ├── BrowseCategoriesSection.tsx
│   │   ├── DiscoverNFTsSection.tsx
│   │   └── NFTHighlightSection.tsx
│   ├── store/             # Zustand state management
│   │   └── useStore.ts
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts
│   ├── data/              # Mock data
│   │   └── mockData.ts
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles and Tailwind imports
├── public/                # Static assets
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## 🎨 Features

### 1. Navigation Bar

- Responsive mobile menu with hamburger icon
- Wallet connection functionality
- Smooth animations and transitions
- Sticky positioning for better UX

### 2. Hero Section

- Eye-catching headline and call-to-action
- Live statistics display (240K+ sales, 100K+ auctions, 240K+ artists)
- **3D Animated NFT Frame** using Three.js (no GIFs)
  - Floating animation
  - Auto-rotation with user controls
  - Glowing particle effects
  - Interactive with OrbitControls

### 3. Trending Collections

- Horizontal scrollable gallery
- Collection cards with primary and secondary images
- Artist attribution with avatars
- Smooth hover effects

### 4. Top-Rated Artists

- Grid layout with ranking badges
- Artist cards with total sales information
- Responsive grid (1-4 columns based on screen size)
- "View Rankings" call-to-action

### 5. Browse Categories

- 8 category cards (Art, Collectibles, Music, Photography, Video, Utility, Sport, Virtual Worlds)
- Icon overlays with backdrop blur effect
- Rotating image effect on hover
- Gradient overlays for better text readability

### 6. Discover More NFTs

- Grid of NFT cards with price and bid information
- Artist attribution
- Click to select functionality
- "View More" button for pagination

### 7. NFT Highlight Section

- Full-width featured NFT showcase
- Gradient overlay for text visibility
- Countdown timer (mock)
- Large call-to-action button
- Scale effect on hover

### 8. Footer

- Newsletter subscription form
- Social media links (Discord, YouTube, Twitter, Instagram)
- Navigation links
- Brand information

## 🎯 State Management with Zustand

The application uses Zustand for efficient state management:

```typescript
// Store structure
{
  mobileMenuOpen: boolean,
  nfts: NFT[],
  artists: Artist[],
  collections: Collection[],
  categories: Category[],
  selectedNFT: NFT | null,
  isWalletConnected: boolean,
  // ... and their setter functions
}
```

## ♿ Accessibility Features

- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **ARIA Labels**: Proper ARIA labels for screen readers
- **Focus States**: Clear focus indicators for all interactive elements
- **Semantic HTML**: Proper use of semantic HTML elements
- **Color Contrast**: WCAG AA compliant color contrast ratios

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl, 2xl)

## 🎨 Design System

### Colors

- **Primary**: `#a259ff` (Purple)
- **Background Primary**: `#2b2b2b` (Dark Gray)
- **Background Secondary**: `#3b3b3b` (Medium Gray)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `#858584` (Gray)

### Typography

- **Headings**: Work Sans (700, 600, 500)
- **Body**: Work Sans (400)
- **Monospace**: Space Mono (400, 700) - for prices and numbers

### Animations

- **Hover Scale**: 0.95 scale on hover (300ms ease-in-out)
- **Rotate Hover**: 15-degree rotation (300ms ease-in-out)
- **Fade In**: Opacity 0 to 1 (300ms)
- **3D Animation**: Continuous floating and rotation

## 🔧 Customization

### Tailwind Configuration

The project uses a custom Tailwind configuration with:

- Custom color palette
- Extended font families
- Custom border radius (20px)
- Custom backdrop blur utilities
- Custom animations

## 📝 Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Configured with recommended rules
- **Component Structure**: Modular and reusable components
- **Clean Code**: Clear naming conventions and documentation
- **Performance**: Optimized with React best practices

## 🚀 Performance Optimizations

- Lazy loading for images
- Efficient re-renders with Zustand
- CSS animations over JavaScript
- Optimized Three.js scene rendering
- Production build with code splitting

**Note**: This is a UI implementation project. No blockchain functionality or actual NFT transactions are implemented.
