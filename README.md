# inventory.io

A 90s-inspired inventory management dashboard built with React and Next.js

## 📦 Overview

**inventory.io**  The application allows users to view, search, and filter product inventory data with a Windows 95/98-inspired design aesthetic.

## ✨ Features

- **90s-Inspired UI**: Complete with beveled buttons, inset form fields, and classic Windows 95/98 styling
- **Responsive Design**: Works on mobile and desktop devices
- **Dual View Modes**: Toggle between grid and table views
- **Advanced Filtering**:
  - Filter by category
  - Filter by availability (in-stock only)
  - Filter by price range
- **Search Functionality**: Search products by name or description
- **Mock API Integration**: Simulates communication with a FastAPI backend


## 🖥️ Tech Stack

- **Frontend**: React, Next.js, TypeScript
- **Styling**: TailwindCSS with custom 90s-inspired components
- **State Management**: React Hooks (useState, useEffect)
- **API Integration**: Simulated API with mock data
- **UI Components**: Custom 90s-styled components

## 📥 Installation

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

## 📁 Project Structure

inventory-io/
├── app/                  # Next.js app directory
│   ├── page.tsx          # Main page component
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles including 90s theme
├── components/           # React components
│   ├── dashboard-header.tsx      # App header
│   ├── filter-sidebar.tsx        # Filtering sidebar
│   ├── inventory-dashboard.tsx   # Main dashboard component
│   ├── product-grid.tsx          # Grid view for products
│   └── product-table.tsx         # Table view for products
├── lib/                  # Utility functions and types
│   ├── api.ts            # Mock API functions
│   └── types.ts          # TypeScript type definitions
└── public/               # Static assets

## 🎮 Usage

### Viewing Products

- The default view shows products in a grid layout
- Click the "Table View" button to switch to a tabular format
- Click the button again (now labeled "Grid View") to switch back


### Searching Products

- Use the search bar at the top of the page to search by product name or description
- Results update in real-time as you type


### Filtering Products

- **Categories**: Select a category from the dropdown menu
- **Availability**: Check the "IN STOCK ONLY" box to show only products that are in stock
- **Price Range**: Enter minimum and maximum price values to filter by price
- Active filters are displayed with a badge showing the count
- Click "Clear All" to reset all filters
