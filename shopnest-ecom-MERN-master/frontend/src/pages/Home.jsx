import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "../styles/home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const categoryList = [
    { name: "Mobiles", label: "Mobiles", icon: "📱" },
    { name: "Laptops", label: "Laptops", icon: "💻" },
    { name: "Electronics", label: "Electronics", icon: "🎧" },
    { name: "Smart Watch", label: "Watches", icon: "⌚" },
    { name: "Camera", label: "Cameras", icon: "📷" },
    { name: "Shoes", label: "Shoes", icon: "👟" },
    { name: "Accessories", label: "Accessories", icon: "⌨️" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home-container">
      {/* Hero Banner */}
      <section className="hero">
        <div className="hero-left">
          <span className="offer">
            🔥 Summer Sale 2026
          </span>
          <h1>
            Shop Smart.
            <br />
            <span className="gradient-text">Live Better.</span>
          </h1>
          <p>
            Discover premium electronics, fashion,
            accessories and much more at amazing prices.
          </p>
          <a href="/shop" className="hero-btn">
            Shop Now
          </a>
        </div>
        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900"
            alt="Shopping"
          />
        </div>
      </section>

      {/* Highlights / Trust Badges */}
      <section className="highlights-section">
        <div className="highlight-card">
          <div className="highlight-icon">🚚</div>
          <div className="highlight-text">
            <h4>Free Shipping</h4>
            <p>On all orders above ₹999</p>
          </div>
        </div>
        <div className="highlight-card">
          <div className="highlight-icon">🛡️</div>
          <div className="highlight-text">
            <h4>Secure Payments</h4>
            <p>100% protected checkout</p>
          </div>
        </div>
        <div className="highlight-card">
          <div className="highlight-icon">🔄</div>
          <div className="highlight-text">
            <h4>Easy Returns</h4>
            <p>30-day return policy</p>
          </div>
        </div>
        <div className="highlight-card">
          <div className="highlight-icon">📞</div>
          <div className="highlight-text">
            <h4>24/7 Support</h4>
            <p>Dedicated customer service</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <div className="section-header">
        <h2 className="section-title">Shop by Category</h2>
        <p className="section-subtitle">Find exactly what you are looking for</p>
      </div>

      <div className="category-grid">
        {categoryList.map((cat) => (
          <div
            key={cat.name}
            className="category-card"
            onClick={() => navigate(`/shop?category=${encodeURIComponent(cat.name)}`)}
          >
            <div className="category-icon-wrapper">{cat.icon}</div>
            <span className="category-label">{cat.label}</span>
          </div>
        ))}
      </div>

      {/* Spotlight Promo Section */}
      <section className="promo-banner">
        <div className="promo-content">
          <span className="promo-tag">LIMITED TIME ONLY</span>
          <h2>Elevate Your Tech Experience</h2>
          <p>
            Get up to 30% off on premium laptops, high-fidelity headphones, and office accessories. Upgrade your workspace today.
          </p>
          <a href="/shop?category=Laptops" className="promo-btn">Explore Deals</a>
        </div>
        <div className="promo-image">
          <img
            src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800"
            alt="Premium workspace setup"
          />
        </div>
      </section>

      {/* Products */}
      <div className="section-header">
        <h2 className="section-title">Latest Products</h2>
        <p className="section-subtitle">Explore our handpicked collection of fresh arrivals</p>
      </div>

      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <h3>Loading products...</h3>
        </div>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;