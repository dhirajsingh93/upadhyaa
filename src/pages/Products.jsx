import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchX, SlidersHorizontal, RefreshCw } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import ProductFilters from '../components/ProductFilters';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { productCategories, products } from '../data/products';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  // Sync category changes with query string
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && cat !== selectedCategory) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryId);
    }
    setSearchParams(searchParams);
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  // Filter products by category and search query
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        item.name.toLowerCase().includes(query) ||
        item.shortDesc.toLowerCase().includes(query) ||
        item.categoryName.toLowerCase().includes(query) ||
        item.polymerOptions.some((p) => p.toLowerCase().includes(query)) ||
        item.applications.some((a) => a.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <SEOHead
        title="Industrial Rubber Products Catalogue | Upadhyay Rubber Industry"
        description="Explore our interactive product catalog of rubber bushes, extruded profiles, custom moulded parts, O-ring kits, oil seals, and industrial rubber gaskets in Faridabad."
      />

      {/* Catalogue Header */}
      <section className="py-16 md:py-20 bg-charcoal border-b border-graphite-border relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="Engineering Catalogue"
            title="PRECISION RUBBER & PLASTIC COMPONENTS"
            subtitle="Search and filter our verified industrial component categories. Custom formulations, die development, and tight tolerances available for all items."
          />
        </div>
      </section>

      {/* Interactive Products Section */}
      <section className="py-12 md:py-20 bg-charcoal-dark min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter and Search Bar */}
          <ProductFilters
            categories={productCategories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onResetFilters={handleResetFilters}
            totalResults={filteredProducts.length}
          />

          {/* Product Grid or Empty State */}
          {filteredProducts.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onOpenModal={setActiveModalProduct}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* Empty State */
            <div className="py-20 text-center bg-graphite border border-graphite-border rounded-2xl p-8 max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-charcoal border border-graphite-border flex items-center justify-center text-muted-gray mx-auto mb-4">
                <SearchX className="w-8 h-8 text-industrial-orange" />
              </div>
              <h3 className="font-display font-bold text-xl text-warm-white">
                No matching components found
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-gray leading-relaxed">
                We couldn't find any products matching "{searchQuery}" under the selected category.
                We specialize in custom tooling for bespoke drawings.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="px-5 py-2.5 rounded-lg bg-industrial-orange text-white text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Reset All Filters
                </button>
                <a
                  href="https://wa.me/918810422099?text=Hello%20Upadhyay%20Rubber%2C%20I%20am%20looking%20for%20a%20custom%20rubber%20component%20not%20listed%20in%20your%20standard%20catalogue."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#25D366]/20"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 32 32">
                    <path d="M16 2C8.268 2 2 8.268 2 16c0 2.68.755 5.185 2.067 7.324L2 30l6.884-2.034A13.916 13.916 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6c-2.316 0-4.48-.65-6.326-1.78l-.454-.28-4.686 1.384 1.402-4.568-.3-.474A11.536 11.536 0 014.4 16c0-6.408 5.192-11.6 11.6-11.6s11.6 5.192 11.6 11.6-5.192 11.6-11.6 11.6zm6.368-8.694c-.348-.174-2.062-1.018-2.38-1.134-.32-.116-.552-.174-.784.174s-.9 1.134-1.104 1.366-.406.262-.754.088a9.493 9.493 0 01-2.8-1.726 10.472 10.472 0 01-1.938-2.414c-.204-.348-.022-.536.152-.71.156-.156.348-.406.522-.61.174-.204.232-.348.348-.58.116-.232.058-.436-.03-.61-.086-.174-.784-1.89-1.074-2.588-.282-.68-.57-.588-.784-.6-.204-.01-.436-.014-.668-.014s-.61.088-.93.436c-.32.348-1.22 1.192-1.22 2.91 0 1.716 1.25 3.372 1.424 3.604.174.232 2.458 3.754 5.956 5.264.832.36 1.482.574 1.988.736.836.266 1.596.228 2.198.138.67-.1 2.062-.844 2.352-1.658.29-.814.29-1.512.204-1.658-.088-.146-.32-.232-.668-.406z"/>
                  </svg>
                  <span>Request Custom Component</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Specifications & RFQ Modal */}
      <ProductModal
        product={activeModalProduct}
        isOpen={!!activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />
    </>
  );
}
