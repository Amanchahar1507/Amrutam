import React from "react";
import { useParams } from "react-router-dom";
import { categories } from "../mock/mockData";
import { useApp } from "../context/AppProvider";
import ProductCard from "../components/ProductCard";
import { Helmet } from "react-helmet-async";

export default function Category() {
  const { slug } = useParams();
  const { products } = useApp();
  const cat = categories.find(c => c.slug === slug);
  const items = products.filter(p => p.category === slug);
  return (
    <>
      <Helmet>
        <title>{cat ? cat.title : "Category"} — Amrutam</title>
      </Helmet>
      <section className="container-row">
        <h2>{cat ? cat.title : "Category"}</h2>
        <div className="grid">
          {items.length ? items.map(p => <ProductCard key={p.id} p={p} />) : <p>No items in this category.</p>}
        </div>
      </section>
    </>
  );
}
