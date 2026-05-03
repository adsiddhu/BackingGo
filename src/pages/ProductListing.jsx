import { useState, useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Search as SearchIcon, X, Check } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductListing = ({ predefinedCategory, hideHeader = false }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('popular');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Derived state from URL params
  const selectedCategory = useMemo(() => searchParams.get('category') || predefinedCategory || 'All', [searchParams, predefinedCategory]);
  const selectedSub = useMemo(() => searchParams.get('sub') || 'All', [searchParams]);
  const searchQuery = useMemo(() => searchParams.get('search') || '', [searchParams]);

  // Local state for sidebar filters
  const [selectedFlavors, setSelectedFlavors] = useState([]);
  const [isEgglessOnly, setIsEgglessOnly] = useState(false);

  const allFlavors = useMemo(() => {
    const flavors = new Set();
    products.forEach(p => p.flavour && flavors.add(p.flavour));
    return Array.from(flavors);
  }, []);

  const handleCategoryChange = useCallback((category) => {
    const newParams = new URLSearchParams(searchParams);
    if (category === 'All') {
      newParams.delete('category');
      newParams.delete('sub');
    } else {
      newParams.set('category', category);
      newParams.delete('sub');
    }
    setSearchParams(newParams);
  }, [searchParams, setSearchParams]);

  const toggleFlavor = (flavor) => {
    setSelectedFlavors(prev =>
      prev.includes(flavor) ? prev.filter(f => f !== flavor) : [...prev, flavor]
    );
  };

  const handleClearFilters = useCallback(() => {
    const newParams = new URLSearchParams();
    setSearchParams(newParams);
    setSelectedFlavors([]);
    setIsEgglessOnly(false);
  }, [setSearchParams]);

  const filteredProducts = useMemo(() => {
    let result = products.filter(product => {
      let matchesCategory = true;
      if (selectedCategory !== 'All') {
        if (selectedSub !== 'All') {
          matchesCategory = product.type === selectedSub || product.flavour === selectedSub || product.name.includes(selectedSub);
        } else {
          matchesCategory = product.category === selectedCategory || product.type === selectedCategory;
        }
      }

      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFlavor = selectedFlavors.length === 0 || selectedFlavors.includes(product.flavour);
      const matchesEggless = isEgglessOnly ? product.isEggless : true;

      return matchesCategory && matchesSearch && matchesFlavor && matchesEggless;
    });

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, selectedSub, searchQuery, sortBy, selectedFlavors, isEgglessOnly]);

  return (
    <div className="bg-bg-subtle min-h-screen py-8"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          {!hideHeader ? (
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                {searchQuery ? `Search Results for "${searchQuery}"` : selectedSub !== 'All' ? selectedSub : selectedCategory === 'All' ? 'All Cakes' : selectedCategory}
              </h1>
              <p className="text-gray-500 mt-1 text-sm">Showing {filteredProducts.length} products</p>
            </div>
          ) : (
            <div className="flex-grow">
              <p className="text-gray-500 text-sm">Showing {filteredProducts.length} products</p>
            </div>
          )}

          <div className="flex items-center gap-4 w-full md:w-auto">
            <button
              className="md:hidden flex items-center gap-2 btn-outline flex-1 justify-center text-sm"
              onClick={() => setIsMobileFiltersOpen(true)}
            >
              <Filter size={18} /> Filters
            </button>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 hidden md:block whitespace-nowrap">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md py-2 px-3 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary flex-1 md:flex-none cursor-pointer"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>


        <div className="flex gap-8">
          {/* Sidebar Filters (Desktop) */}
          <div className="hidden md:block w-64 shrink-0 space-y-6 sticky top-24 self-start mt-10">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-bold text-sm mb-3 text-gray-900 uppercase tracking-wider">Categories</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer text-sm">
                    <input type="radio" checked={selectedCategory === 'All'} onChange={() => handleCategoryChange('All')} className="text-primary focus:ring-primary w-4 h-4" />
                    <span className={selectedCategory === 'All' ? 'text-primary font-medium' : 'text-gray-600'}>All Cakes</span>
                  </label>
                  {categories.map(category => (
                    <label key={category.name} className="flex items-center gap-2 cursor-pointer text-sm">
                      <input type="radio" checked={selectedCategory === category.name} onChange={() => handleCategoryChange(category.name)} className="text-primary focus:ring-primary w-4 h-4" />
                      <span className={selectedCategory === category.name ? 'text-primary font-medium' : 'text-gray-600'}>{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Eggless Filter */}
              <div className="mb-6 pt-4 border-t border-gray-100">
                <h3 className="font-bold text-sm mb-3 text-gray-900 uppercase tracking-wider">Preference</h3>
                <label className="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="checkbox" checked={isEgglessOnly} onChange={(e) => setIsEgglessOnly(e.target.checked)} className="rounded text-primary focus:ring-primary w-4 h-4" />
                  <span className="flex items-center gap-1 text-gray-600">
                    <span className="w-3 h-3 border border-green-600 flex items-center justify-center rounded-sm bg-white"><span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span></span>
                    100% Eggless
                  </span>
                </label>
              </div>

              {/* Flavor Filter */}
              <div className="mb-6 pt-4 border-t border-gray-100">
                <h3 className="font-bold text-sm mb-3 text-gray-900 uppercase tracking-wider">Flavour</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
                  {allFlavors.map(flavor => (
                    <label key={flavor} className="flex items-center gap-2 cursor-pointer text-sm">
                      <input type="checkbox" checked={selectedFlavors.includes(flavor)} onChange={() => toggleFlavor(flavor)} className="rounded text-primary focus:ring-primary w-4 h-4" />
                      <span className="text-gray-600">{flavor}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
            <div className="px-4 py-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Filters</h2>
              <button onClick={() => setIsMobileFiltersOpen(false)} className="text-gray-400 hover:text-gray-500">
                <X size={24} />
              </button>
            </div>
            <div className="p-4 flex-1 overflow-y-auto">

              <div className="mb-6">
                <h3 className="font-bold text-sm mb-3 text-gray-900 uppercase">Categories</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3">
                    <input type="radio" checked={selectedCategory === 'All'} onChange={() => handleCategoryChange('All')} className="text-primary focus:ring-primary w-5 h-5" />
                    <span className="text-gray-900 text-sm">All Cakes</span>
                  </label>
                  {categories.map(category => (
                    <label key={category.name} className="flex items-center gap-3">
                      <input type="radio" checked={selectedCategory === category.name} onChange={() => handleCategoryChange(category.name)} className="text-primary focus:ring-primary w-5 h-5" />
                      <span className="text-gray-900 text-sm">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6 pt-4 border-t border-gray-200">
                <h3 className="font-bold text-sm mb-3 text-gray-900 uppercase">Preference</h3>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked={isEgglessOnly} onChange={(e) => setIsEgglessOnly(e.target.checked)} className="rounded text-primary focus:ring-primary w-5 h-5" />
                  <span className="text-gray-900 text-sm">100% Eggless</span>
                </label>
              </div>

            </div>
            <div className="border-t border-gray-200 p-4 flex gap-3">
              <button onClick={handleClearFilters} className="btn-outline flex-1 py-2 text-sm">
                Clear All
              </button>
              <button onClick={() => setIsMobileFiltersOpen(false)} className="btn-primary flex-1 py-2 text-sm">
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
