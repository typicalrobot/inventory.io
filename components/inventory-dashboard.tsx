"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Search } from "lucide-react"

import { fetchInventory } from "@/lib/api"
import type { Product } from "@/lib/types"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import DashboardHeader from "@/components/dashboard-header"
import FilterSidebar from "@/components/filter-sidebar"
import ProductGrid from "@/components/product-grid"
import ProductTable from "@/components/product-table"

export default function InventoryDashboard() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid")
  const [filters, setFilters] = useState({
    category: "all",
    inStock: false,
    priceRange: [0, 1000],
  })

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      try {
        const data = await fetchInventory()
        setProducts(data)
        setFilteredProducts(data)
      } catch (error) {
        console.error("Failed to fetch inventory:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  useEffect(() => {
    let result = [...products]

    // Apply search filter
    if (searchQuery) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Apply category filter
    if (filters.category !== "all") {
      result = result.filter((product) => product.category === filters.category)
    }

    // Apply in-stock filter
    if (filters.inStock) {
      result = result.filter((product) => product.stockQuantity > 0)
    }

    // Apply price range filter
    result = result.filter(
      (product) => product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1],
    )

    setFilteredProducts(result)
  }, [searchQuery, filters, products])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters)
  }

  const toggleView = () => {
    setViewMode(viewMode === "grid" ? "table" : "grid")
  }

  const activeFiltersCount =
    (filters.category !== "all" ? 1 : 0) +
    (filters.inStock ? 1 : 0) +
    (filters.priceRange[0] > 0 || filters.priceRange[1] < 1000 ? 1 : 0)

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-mono">
      <DashboardHeader />

      <div className="flex flex-1">
        <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />

        <div className="flex-1 p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 retro-input font-mono"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>

            <div className="flex items-center gap-2">
              {activeFiltersCount > 0 && (
                <span className="retro-badge mr-2">
                  {activeFiltersCount} {activeFiltersCount === 1 ? "filter" : "filters"} active
                </span>
              )}
              <button className="retro-button bg-cyan-500" onClick={toggleView}>
                {viewMode === "grid" ? "Table View" : "Grid View"}
              </button>
              <button className="retro-button bg-purple-600">Add Product</button>
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="retro-card p-4">
                  <Skeleton className="h-40 w-full mb-4" />
                  <Skeleton className="h-4 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-2" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
              ))}
            </div>
          ) : (
            <>
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12 retro-card p-8">
                  <p className="text-black mb-4 font-bold">No products found matching your criteria</p>
                  <button
                    className="retro-button bg-cyan-500"
                    onClick={() => {
                      setSearchQuery("")
                      setFilters({
                        category: "all",
                        inStock: false,
                        priceRange: [0, 1000],
                      })
                    }}
                  >
                    Clear Filters
                  </button>
                </div>
              ) : viewMode === "grid" ? (
                <ProductGrid products={filteredProducts} />
              ) : (
                <ProductTable products={filteredProducts} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
