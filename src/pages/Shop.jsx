import React from "react";
import { Helmet } from "react-helmet-async";
import ProductCard from "../components/ProductCard";
import { categories } from "../mock/mockData";
import { useApp } from "../context/AppProvider";
import { Link } from "react-router-dom";

export default function Shop() {
  const { products } = useApp();
  return (
    <>
      <Helmet>
        <title>Shop — Amrutam</title>
      </Helmet>
      <section>
        <div className="shop-head container-row between">
          <h2>Store</h2>
          <div>
            {categories.map(c => (
              <Link key={c.slug} to={`/shop/category/${c.slug}`} className="pill" style={{marginLeft:8}}>
                {c.title}
              </Link>
            ))}
            <Link to="/cart" className="btn ghost" style={{marginLeft:12}}>Cart</Link>
          </div>
        </div>
        <div className="grid container-row">
          {products.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>
    </>
  );
}
