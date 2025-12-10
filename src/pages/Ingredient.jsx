import React from "react";
import { useParams, Link } from "react-router-dom";
import { ingredients } from "../mock/mockData";
import { useApp } from "../context/AppProvider";
import { Helmet } from "react-helmet-async";

export default function Ingredient() {
  const { slug } = useParams();
  const { products } = useApp();
  const ing = ingredients.find(i => i.slug === slug);
  const related = products
    .map(p => {
      const found = p.ingredients.find(i => i.slug === slug);
      if (found) return { id: p.id, name: p.name, ratio: found.ratio };
      return null;
    })
    .filter(Boolean);
  return (
    <>
      <Helmet>
        <title>{ing ? ing.title : slug} — Ingredient</title>
      </Helmet>
      <section className="container-row">
        <h2>{ing ? ing.title : slug}</h2>
        <p className="muted">{ing ? ing.details : "Ingredient details not available."}</p>
        <h3>Used in</h3>
        <ul>
          {related.length ? related.map(r => (
            <li key={r.id}>
              <Link to={`/product/${r.id}`}>{r.name}</Link> — {r.ratio}
            </li>
          )) : <li>No products listed with this ingredient.</li>}
        </ul>
      </section>
    </>
  );
}
