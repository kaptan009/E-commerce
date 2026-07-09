import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "../styles/product.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [maxPriceLimit, setMaxPriceLimit] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState("default");

  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "All";

  const setCategory = (newVal) => {
    if (newVal === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", newVal);
    }
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = useMemo(() => {
    return ["All", ...new Set(products.map((p) => p.category))];
  }, [products]);

  const maxPriceCalculated = useMemo(() => {
    if (products.length === 0) return 100000;
    return Math.max(...products.map((p) => p.price));
  }, [products]);

  useEffect(() => {
    if (products.length > 0) {
      setMaxPriceLimit(Math.max(...products.map((p) => p.price)));
    }
  }, [products]);

  const filteredProducts = useMemo(() => {
    const activeMaxPrice = maxPriceLimit || maxPriceCalculated;
    return products
      .filter((p) => {
        const matchSearch =
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.description.toLowerCase().includes(search.toLowerCase());

        const matchCategory = category === "All" || p.category === category;

        const matchPrice = p.price <= activeMaxPrice;

        const matchStock = !inStockOnly || p.stock > 0;

        return matchSearch && matchCategory && matchPrice && matchStock;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "rating-desc") return (b.ratings || 0) - (a.ratings || 0);
        return 0;
      });
  }, [products, search, category, maxPriceLimit, maxPriceCalculated, inStockOnly, sortBy]);

  const handleClearFilters = () => {
    setSearch("");
    setCategory("All");
    setMaxPriceLimit(maxPriceCalculated);
    setInStockOnly(false);
    setSortBy("default");
  };

  return (
    <div className="shop-container">
      <h1>Discover Products</h1>

      <div className="shop-layout">
        <aside className="filters-sidebar">
          <h3>Filters</h3>

          <div className="filter-group">
            <label>Categories</label>
            <div className="category-pills">
              {categories.map((c) => (
                <div
                  key={c}
                  className={`category-pill ${category === c ? "active" : ""}`}
                  onClick={() => setCategory(c)}
                >
                  <span>{c}</span>
                  {category === c && <span className="check-mark">✓</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <label>Max Price</label>
            <div className="price-slider-container">
              <input
                type="range"
                min="0"
                max={maxPriceCalculated}
                value={maxPriceLimit || maxPriceCalculated}
                onChange={(e) => setMaxPriceLimit(Number(e.target.value))}
                className="price-slider"
              />
              <div className="price-values">
                <span>₹0</span>
                <span>₹{(maxPriceLimit || maxPriceCalculated).toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>

          <div className="filter-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
              />
              <span>In Stock Only</span>
            </label>
          </div>

          <button onClick={handleClearFilters} className="btn-clear">
            Clear All Filters
          </button>
        </aside>

        <main className="products-section">
          <div className="shop-toolbar-upgraded">
            <div className="search-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Sort by: Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating-desc">Top Rated</option>
            </select>
          </div>

          <p className="product-count">
            Showing {filteredProducts.length} of {products.length} Products
          </p>

          {loading ? (
            <div className="loading-spinner">
              <div className="spinner"></div>
              <h3>Loading catalog...</h3>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="no-products">
              <h3>No products found</h3>
              <p>Try matching other criteria or clearing all filters.</p>
            </div>
          ) : (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shop;