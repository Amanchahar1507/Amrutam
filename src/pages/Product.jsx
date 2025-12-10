import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useApp } from "../context/AppProvider";

export default function Product() {
  const { id } = useParams();
  const { products, addToCart } = useApp();
  const p = products.find(x => x.id === id);
  const navigate = useNavigate();
  if (!p) return <div className="center">Product not found</div>;
  function handleAddToCart() {
    addToCart({ id: p.id, name: p.name, price: p.price });
    navigate("/cart");
  }
  return (
    <>
      <Helmet>
        <title>{p.name} — Amrutam</title>
        <meta name="description" content={p.short} />
      </Helmet>
      <div className="product-detail container-row">
        <div className="product-gallery">
          {p.images.map((img, i) => <img key={i} src={img} alt={`${p.name} ${i}`} className="detail-img" />)}
        </div>
        <div className="product-info">
          <h1>{p.name}</h1>
          <div className="muted">₹{p.price} • {p.rating} ★</div>
          <p>{p.description}</p>
          <h4>Ingredients</h4>
          <ul>
            {p.ingredients.map((ing, i) => (
              <li key={i}>
                <Link to={`/ingredient/${ing.slug}`}>{ing.name}</Link> — <span className="muted">{ing.ratio}</span>
              </li>
            ))}
          </ul>
          <div className="row" style={{marginTop:12}}>
            <button className="btn" onClick={handleAddToCart}>Add to cart</button>
            <Link to="/cart" className="btn ghost" style={{marginLeft:8}}>Go to cart</Link>
          </div>
        </div>
      </div>
    </>
  );
}
