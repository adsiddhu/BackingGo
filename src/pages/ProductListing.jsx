import { useState, useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Search as SearchIcon, X } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductListing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('popular');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Use useMemo to derive state from URL params
  const selectedCategory = useMemo(() => searchParams.get('category') || 'All', [searchParams]);
  const searchQuery = useMemo(() => searchParams.get('search') || '', [searchParams]);

  const handleCategoryChange = useCallback((category) => {
    const newParams = new URLSearchParams(searchParams);
    if (category === 'All') {
      newParams.delete('category');
    } else {
      newParams.set('category', category);
    }
    setSearchParams(newParams);
  }, [searchParams, setSearchParams]);

  const handleClearFilters = useCallback(() => {
    const newParams = new URLSearchParams();
    setSearchParams(newParams);
  }, [setSearchParams]);

  const filteredProducts = useMemo(() => {
    let result = products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="bg-bg-subtle min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {searchQuery ? `Search Results for "${searchQuery}"` : selectedCategory === 'All' ? 'All Cakes' : selectedCategory}
            </h1>
            <p className="text-gray-500 mt-1">Showing {filteredProducts.length} products</p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <button
              className="md:hidden flex items-center gap-2 btn-outline flex-1 justify-center"
              onClick={() => setIsMobileFiltersOpen(true)}
            >
              <Filter size={20} /> Filters
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-md py-2 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary flex-1 md:flex-none"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters (Desktop) */}
          <div className="hidden md:block w-64 shrink-0 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-4 text-gray-900 flex items-center gap-2">
                <Filter size={20} /> Categories
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === 'All'}
                    onChange={() => handleCategoryChange('All')}
                    className="text-primary focus:ring-primary w-4 h-4"
                  />
                  <span className={selectedCategory === 'All' ? 'text-primary font-medium' : 'text-gray-600'}>All Cakes</span>
                </label>
                {categories.map(category => (
                  <label key={category.name} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === category.name}
                      onChange={() => handleCategoryChange(category.name)}
                      className="text-primary focus:ring-primary w-4 h-4"
                    />
                    <span className={selectedCategory === category.name ? 'text-primary font-medium' : 'text-gray-600'}>
                      {category.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-xl text-center shadow-sm border border-gray-100">
                <SearchIcon size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria.</p>
                <button
                  onClick={handleClearFilters}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileFiltersOpen(false)}></div>
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white shadow-xl h-full ml-auto">
            <div className="px-4 py-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button onClick={() => setIsMobileFiltersOpen(false)} className="text-gray-400 hover:text-gray-500">
                <X size={24} />
              </button>
            </div>
            <div className="p-4 flex-1 overflow-y-auto">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Categories</h3>
              <div className="space-y-4">
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="mobile-category"
                    checked={selectedCategory === 'All'}
                    onChange={() => handleCategoryChange('All')}
                    className="text-primary focus:ring-primary w-5 h-5"
                  />
                  <span className="text-gray-900">All Cakes</span>
                </label>
                {categories.map(category => (
                  <label key={category.name} className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="mobile-category"
                      checked={selectedCategory === category.name}
                      onChange={() => handleCategoryChange(category.name)}
                      className="text-primary focus:ring-primary w-5 h-5"
                    />
                    <span className="text-gray-900">{category.name}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="border-t border-gray-200 p-4">
              <button onClick={() => setIsMobileFiltersOpen(false)} className="w-full btn-primary">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductListing;
