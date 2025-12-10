import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppProvider";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const { products } = useApp();
  const featured = products.slice(0, 2);
  return (
    <>
      <Helmet>
        <title>Amrutam - Home</title>
        <meta name="description" content="Amrutam home — shop ayurvedic products and join the forum." />
      </Helmet>
      <section className="hero">
        <div className="container-row hero-inner">
          <div>
            <h1>Natural Ayurveda for your daily care</h1>
            <p>Shop herbal products and join the community forum.</p>
            <div className="row">
              <Link to="/shop" className="btn">Shop Now</Link>
              <Link to="/forum" className="btn ghost">Forum</Link>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=60" alt="Ayurveda" className="hero-img" />
        </div>
      </section>
      <section className="container-row">
        <h2>Featured</h2>
        <div className="grid">
          {featured.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>
    </>
  );
}
