import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";
import "../styles/product.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const discount = React.useMemo(() => Math.floor(Math.random() * 25) + 10, []);

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (product.stock > 0) {
      dispatch(
        addToCart({
          productId: product._id,
          name: product.name,
          price: product.price,
          imageUrl: product.imageUrl,
          qty: 1,
        })
      );
      toast.success(`${product.name} added to cart!`);
    } else {
      toast.error("Product is out of stock!");
    }
  };

  return (
    <div className="product-card">
      <span className="discount-badge">
        {discount}% OFF
      </span>

      <Link to={`/product/${product._id}`} className="product-image-wrapper">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-image"
        />
      </Link>

      <div className="product-info">
        <Link to={`/product/${product._id}`} className="product-title-link">
          <h3>{product.name}</h3>
        </Link>

        <div className="rating">
          <span className="star-icon">⭐</span>
          <span className="rating-value">{product.ratings || 4.5}</span>
          <span className="reviews-count">({product.numReviews || 0})</span>
        </div>

        <p className="price">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

        <div className="stock-info">
          {product.stock > 0 ? (
            <span className="in-stock"><span className="dot">●</span> In Stock</span>
          ) : (
            <span className="out-of-stock"><span className="dot">●</span> Out of Stock</span>
          )}
        </div>

        <div className="card-actions">
          <Link
            to={`/product/${product._id}`}
            className="btn btn-secondary"
          >
            Details
          </Link>
          <button
            onClick={handleAddToCart}
            className="btn btn-primary"
            disabled={product.stock <= 0}
          >
            {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;