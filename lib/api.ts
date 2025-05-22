import type { Product } from "./types"

// Simulated API call to a FastAPI backend
export async function fetchInventory(): Promise<Product[]> {
  // In a real app, this would be a fetch call to your FastAPI endpoint
  // return fetch('https://api.example.com/inventory').then(res => res.json())

  // For demo purposes, we'll simulate a network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts)
    }, 1000)
  })
}

// Mock product data
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    description: "Premium noise-cancelling wireless headphones with 30-hour battery life",
    price: 199.99,
    category: "electronics",
    imageUrl: "",
    stockQuantity: 45,
    sku: "ELEC-WH-001",
    vendor: "AudioTech",
  },
  {
    id: "2",
    name: "Ergonomic Office Chair",
    description: "Adjustable office chair with lumbar support and breathable mesh back",
    price: 249.99,
    category: "furniture",
    imageUrl: "",
    stockQuantity: 12,
    sku: "FURN-CH-002",
    vendor: "ComfortSeating",
  },
  {
    id: "3",
    name: "Smart Watch Series 5",
    description: "Fitness and health tracking smartwatch with heart rate monitor",
    price: 299.99,
    category: "electronics",
    imageUrl: "",
    stockQuantity: 28,
    sku: "ELEC-SW-003",
    vendor: "TechGear",
  },
  {
    id: "4",
    name: "Cotton T-Shirt",
    description: "Soft, breathable 100% organic cotton t-shirt in various colors",
    price: 24.99,
    category: "clothing",
    imageUrl: "",
    stockQuantity: 150,
    sku: "CLTH-TS-004",
    vendor: "EcoApparel",
  },
  {
    id: "5",
    name: "Stainless Steel Water Bottle",
    description: "Vacuum insulated water bottle that keeps drinks cold for 24 hours",
    price: 34.99,
    category: "food",
    imageUrl: "",
    stockQuantity: 75,
    sku: "KITC-WB-005",
    vendor: "EcoLiving",
  },
  {
    id: "6",
    name: "Wireless Charging Pad",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices",
    price: 49.99,
    category: "electronics",
    imageUrl: "",
    stockQuantity: 0,
    sku: "ELEC-WC-006",
    vendor: "PowerTech",
  },
  {
    id: "7",
    name: "Leather Wallet",
    description: "Genuine leather bifold wallet with RFID blocking technology",
    price: 39.99,
    category: "clothing",
    imageUrl: "",
    stockQuantity: 35,
    sku: "ACCS-WL-007",
    vendor: "LeatherCraft",
  },
  {
    id: "8",
    name: "Bestselling Novel",
    description: "Award-winning fiction novel by renowned author",
    price: 19.99,
    category: "books",
    imageUrl: "",
    stockQuantity: 200,
    sku: "BOOK-NV-008",
    vendor: "PageTurner Publishing",
  },
  {
    id: "9",
    name: "Coffee Maker",
    description: "Programmable coffee maker with thermal carafe, makes up to 12 cups",
    price: 89.99,
    category: "food",
    imageUrl: "",
    stockQuantity: 8,
    sku: "KITC-CM-009",
    vendor: "BrewMaster",
  },
  {
    id: "10",
    name: "Yoga Mat",
    description: "Non-slip, eco-friendly yoga mat with carrying strap",
    price: 29.99,
    category: "clothing",
    imageUrl: "",
    stockQuantity: 60,
    sku: "FITN-YM-010",
    vendor: "ZenFitness",
  },
  {
    id: "11",
    name: "Desk Lamp",
    description: "Adjustable LED desk lamp with multiple brightness levels",
    price: 44.99,
    category: "furniture",
    imageUrl: "",
    stockQuantity: 25,
    sku: "HOME-DL-011",
    vendor: "LightWorks",
  },
  {
    id: "12",
    name: "Bluetooth Speaker",
    description: "Portable waterproof Bluetooth speaker with 20-hour battery life",
    price: 79.99,
    category: "electronics",
    imageUrl: "",
    stockQuantity: 0,
    sku: "ELEC-BS-012",
    vendor: "SoundWave",
  },
]
