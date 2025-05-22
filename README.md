# inventory.io

![inventory.io](https://placeholder.svg?height=200&width=600&query=inventory.io%20-%2090s%20style%20inventory%20management%20system)

A 90s-inspired inventory management dashboard built with React and Next.js.

## 📦 Overview

inventory.io is a retro-styled inventory management system that combines modern web technologies with a nostalgic 90s user interface. The application allows users to view, search, and filter product inventory data with a Windows 95/98-inspired design aesthetic.

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

## 🚀 Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/inventory-io.git
   cd inventory-io
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🎮 Usage Guide

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

## 📁 Project Structure

\`\`\`
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
\`\`\`

## 🎨 Design Decisions

### 90s Aesthetic

The UI is designed to evoke nostalgia for the Windows 95/98 era with:

- **Beveled Edges**: Buttons and cards have the classic 3D "raised" appearance
- **Inset Fields**: Form inputs have the "sunken" appearance
- **Color Scheme**: Uses the classic gray, white, black, and blue colors
- **Typography**: Monospace fonts throughout for that computer terminal feel
- **Custom Dropdown**: Recreates the classic Windows dropdown menu style
- **Header Design**: Features gradient backgrounds and 3D text effects
- **Custom Scrollbars**: Styled to match the Windows 95/98 scrollbars

### Modern Functionality

Despite the retro appearance, the application includes modern functionality:

- Responsive design that works on all devices
- Real-time filtering and searching
- Toggle between different view modes
- Accessible UI elements

## 🔮 Future Enhancements

- User authentication system
- Product CRUD operations
- Real backend integration with FastAPI
- Dark mode toggle
- Export functionality (CSV, PDF)
- Inventory analytics and reporting
- Barcode scanning for mobile

## 🙏 Acknowledgments

- Inspired by Windows 95/98 UI design
- Built with Next.js and React
- Styled with TailwindCSS

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<div align="center">
  <img src="https://placeholder.svg?height=50&width=300&query=BEST%20VIEWED%20IN%20NETSCAPE%20NAVIGATOR" alt="Best viewed in Netscape Navigator" />
  <p>© 2025 inventory.io - All rights reserved</p>
</div>
