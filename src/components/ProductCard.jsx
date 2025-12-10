import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ p }) {
  return (
    <article className="product-card">
      <Link to={`/product/${p.id}`} aria-label={`View ${p.name}`}>
        <img src={p.images?.[0]} alt={p.name} className="product-img" />
        <div className="product-body">
          <h3>{p.name}</h3>
          <p className="muted">{p.short}</p>
          <div className="row between">
            <div>₹{p.price}</div>
            <div className="muted small">{p.rating} ★</div>
          </div>
        </div>
      </Link>
    </article>
  );
}
