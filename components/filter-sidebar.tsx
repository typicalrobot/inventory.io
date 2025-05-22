"use client"

import { useState } from "react"
import { Filter } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

type FilterProps = {
  filters: {
    category: string
    inStock: boolean
    priceRange: number[]
  }
  onFilterChange: (filters: {
    category: string
    inStock: boolean
    priceRange: number[]
  }) => void
}

export default function FilterSidebar({ filters, onFilterChange }: FilterProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "electronics", label: "Electronics" },
    { value: "clothing", label: "Clothing" },
    { value: "furniture", label: "Furniture" },
    { value: "books", label: "Books" },
    { value: "food", label: "Food & Beverages" },
  ]

  const handleCategoryChange = (value: string) => {
    onFilterChange({ ...filters, category: value })
    setDropdownOpen(false)
  }

  const handleInStockChange = (checked: boolean) => {
    onFilterChange({ ...filters, inStock: checked })
  }

  const handlePriceRangeChange = (value: number[]) => {
    onFilterChange({ ...filters, priceRange: value })
  }

  const clearFilters = () => {
    onFilterChange({
      category: "all",
      inStock: false,
      priceRange: [0, 1000],
    })
  }

  const FilterContent = () => (
    <div className="py-4 font-mono">
      <div className="flex items-center justify-between px-4 mb-4">
        <h3 className="font-bold text-lg">FILTERS</h3>
        <button className="retro-button bg-gray-500 text-sm py-1" onClick={clearFilters}>
          Clear All
        </button>
      </div>

      <div className="border-t-2 border-b-2 border-black my-4"></div>

      <div className="space-y-4 px-4">
        <div>
          <h4 className="mb-2 text-sm font-bold">CATEGORY</h4>
          <div className="relative">
            <button
              className="w-full p-2 font-mono bg-gray-200 border-2 border-black text-left flex justify-between items-center"
              style={{
                boxShadow: dropdownOpen
                  ? "inset 1px 1px 0px #808080, inset -1px -1px 0px #ffffff"
                  : "inset 1px 1px 0px #ffffff, inset -1px -1px 0px #808080, 2px 2px 0px #000000",
              }}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>{categories.find((cat) => cat.value === filters.category)?.label || "All Categories"}</span>
              <span className="text-xs">▼</span>
            </button>
            {dropdownOpen && (
              <div className="absolute z-10 w-full mt-1 border-2 border-black bg-gray-200">
                <div className="border border-t-white border-l-white border-b-gray-600 border-r-gray-600">
                  {categories.map((category) => (
                    <div
                      key={category.value}
                      className={`p-2 cursor-pointer hover:bg-blue-600 hover:text-white ${
                        filters.category === category.value ? "bg-blue-600 text-white" : ""
                      }`}
                      onClick={() => handleCategoryChange(category.value)}
                    >
                      {category.label}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="border-t-2 border-black my-4"></div>

        <div>
          <h4 className="mb-2 text-sm font-bold">AVAILABILITY</h4>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="in-stock"
              className="h-4 w-4 border-2 border-black cursor-pointer"
              style={{
                appearance: "none",
                backgroundColor: "white",
                boxShadow: "inset 1px 1px 0px #808080, inset -1px -1px 0px #ffffff",
                position: "relative",
              }}
              checked={filters.inStock}
              onChange={(e) => handleInStockChange(e.target.checked)}
            />
            <label htmlFor="in-stock" className="text-sm font-bold cursor-pointer">
              IN STOCK ONLY
            </label>
          </div>
          <style jsx>{`
            input[type="checkbox"]:checked::after {
              content: "✓";
              position: absolute;
              top: -2px;
              left: 1px;
              font-size: 14px;
              font-weight: bold;
            }
          `}</style>
        </div>

        <div className="border-t-2 border-black my-4"></div>

        <div>
          <h4 className="mb-2 text-sm font-bold">PRICE RANGE</h4>
          <div className="pt-2">
            <div className="flex items-center gap-2">
              <div className="flex-1">
                <label htmlFor="min-price" className="text-xs font-bold mb-1 block">
                  MIN ($)
                </label>
                <input
                  id="min-price"
                  type="number"
                  min={0}
                  max={filters.priceRange[1]}
                  value={filters.priceRange[0]}
                  onChange={(e) => {
                    const value = Number(e.target.value)
                    if (!isNaN(value) && value >= 0 && value <= filters.priceRange[1]) {
                      handlePriceRangeChange([value, filters.priceRange[1]])
                    }
                  }}
                  className="h-8 w-full p-2 font-mono bg-white border-2 border-black"
                  style={{
                    boxShadow: "inset 1px 1px 0px #808080, inset -1px -1px 0px #ffffff",
                  }}
                />
              </div>
              <div className="flex-1">
                <label htmlFor="max-price" className="text-xs font-bold mb-1 block">
                  MAX ($)
                </label>
                <input
                  id="max-price"
                  type="number"
                  min={filters.priceRange[0]}
                  max={1000}
                  value={filters.priceRange[1]}
                  onChange={(e) => {
                    const value = Number(e.target.value)
                    if (!isNaN(value) && value >= filters.priceRange[0] && value <= 1000) {
                      handlePriceRangeChange([filters.priceRange[0], value])
                    }
                  }}
                  className="h-8 w-full p-2 font-mono bg-white border-2 border-black"
                  style={{
                    boxShadow: "inset 1px 1px 0px #808080, inset -1px -1px 0px #ffffff",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="md:hidden p-4">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="retro-button bg-gray-500 w-full">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[350px] retro-sidebar">
            <FilterContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-[250px] retro-sidebar">
        <FilterContent />
      </div>
    </>
  )
}
