import React from 'react';
import { Search, X, Filter } from 'lucide-react';

export default function ProductFilters({
  categories = [],
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onResetFilters,
  totalResults,
}) {
  const hasActiveFilters = selectedCategory !== 'all' || searchQuery.trim().length > 0;

  return (
    <div className="space-y-6 mb-10">
      {/* Top Bar: Search Input + Result Count */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search Field */}
        <div className="relative flex-grow max-w-xl">
          <Search className="w-5 h-5 text-muted-gray absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search rubber components (e.g. Bush, EPDM, O-Ring, Gasket, Seal)..."
            className="w-full pl-12 pr-10 py-3 rounded-xl bg-graphite border border-graphite-border focus:border-industrial-orange focus:ring-2 focus:ring-industrial-orange/30 text-warm-white placeholder:text-muted-gray text-sm transition-all focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              aria-label="Clear search query"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-muted-gray hover:text-warm-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Results counter and reset */}
        <div className="flex items-center justify-between md:justify-end gap-3 text-xs">
          <span className="font-mono text-muted-gray">
            Showing <strong className="text-warm-white">{totalResults}</strong> engineering items
          </span>
          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-charcoal border border-industrial-orange/40 text-industrial-orange hover:bg-industrial-orange hover:text-white transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Category Pills List */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-muted-gray uppercase pr-2 shrink-0">
          <Filter className="w-3.5 h-3.5 text-industrial-orange" />
          Category:
        </span>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 border ${
                isActive
                  ? "bg-industrial-orange text-white border-industrial-orange shadow-md shadow-industrial-orange/25"
                  : "bg-graphite text-muted-gray hover:text-warm-white border-graphite-border hover:border-graphite-light"
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
