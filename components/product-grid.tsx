import type { Product } from "@/lib/types"

type ProductGridProps = {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="retro-card overflow-hidden">
          <div className="p-4 pb-0">
            <div className="flex justify-between items-center">
              <span className="retro-badge">{product.category}</span>
              {product.stockQuantity === 0 && <span className="retro-badge bg-red-400">Out of Stock</span>}
              {product.stockQuantity > 0 && product.stockQuantity < 10 && (
                <span className="retro-badge bg-yellow-300">Low Stock</span>
              )}
            </div>
          </div>
          <div className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-bold truncate">{product.name}</h3>
              <span className="font-bold">${product.price.toFixed(2)}</span>
            </div>
            <p className="text-sm line-clamp-2">{product.description}</p>
          </div>
          <div className="p-4 pt-0 flex justify-between text-sm bg-gray-100 border-t-2 border-black">
            <span className="font-bold">SKU: {product.sku}</span>
            <span
              className={
                product.stockQuantity > 10
                  ? "text-green-600 font-bold"
                  : product.stockQuantity > 0
                    ? "text-amber-600 font-bold"
                    : "text-red-600 font-bold"
              }
            >
              {product.stockQuantity > 0 ? `${product.stockQuantity} in stock` : "Out of stock"}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
