import { ArrowUpDown } from "lucide-react"

import type { Product } from "@/lib/types"

type ProductTableProps = {
  products: Product[]
}

export default function ProductTable({ products }: ProductTableProps) {
  return (
    <div className="retro-card overflow-hidden">
      <table className="w-full retro-table font-mono">
        <thead>
          <tr>
            <th className="text-left">
              <div className="flex items-center">
                Product
                <button className="ml-1 p-1 border border-black bg-white">
                  <ArrowUpDown className="h-4 w-4" />
                </button>
              </div>
            </th>
            <th className="text-left">SKU</th>
            <th className="text-left">Category</th>
            <th className="text-left">
              <div className="flex items-center">
                Price
                <button className="ml-1 p-1 border border-black bg-white">
                  <ArrowUpDown className="h-4 w-4" />
                </button>
              </div>
            </th>
            <th className="text-left">
              <div className="flex items-center">
                Stock
                <button className="ml-1 p-1 border border-black bg-white">
                  <ArrowUpDown className="h-4 w-4" />
                </button>
              </div>
            </th>
            <th className="text-left">Vendor</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-100">
              <td className="font-bold">{product.name}</td>
              <td>{product.sku}</td>
              <td>
                <span className="retro-badge">{product.category}</span>
              </td>
              <td className="font-bold">${product.price.toFixed(2)}</td>
              <td>
                <div className="flex items-center">
                  {product.stockQuantity === 0 ? (
                    <span className="retro-badge bg-red-400">Out of Stock</span>
                  ) : product.stockQuantity < 10 ? (
                    <span className="retro-badge bg-yellow-300">{product.stockQuantity} left</span>
                  ) : (
                    <span className="text-green-600 font-bold">{product.stockQuantity}</span>
                  )}
                </div>
              </td>
              <td>{product.vendor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
