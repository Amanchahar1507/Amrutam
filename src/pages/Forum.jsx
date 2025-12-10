import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import ForumCard from "../components/ForumCard";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppProvider";

export default function Forum() {
  const { threads } = useApp();
  const [filter, setFilter] = useState("mostRecent");
  function sorted() {
    const arr = [...threads];
    if (filter === "mostLiked") return arr.sort((a,b)=>b.votes-a.votes);
    if (filter === "mostRecommended") return arr.sort((a,b)=>b.recommended - a.recommended);
    if (filter === "oldest") return arr.sort((a,b)=>a.createdAt - b.createdAt);
    return arr.sort((a,b)=>b.createdAt - a.createdAt);
  }
  return (
    <>
      <Helmet>
        <title>Forum — Amrutam</title>
      </Helmet>
      <section className="container-row">
        <div className="row between">
          <h2>Forum</h2>
          <div className="row">
            <select value={filter} onChange={(e)=>setFilter(e.target.value)}>
              <option value="mostRecent">Most recent</option>
              <option value="mostLiked">Most liked</option>
              <option value="mostRecommended">Most recommended</option>
              <option value="oldest">Oldest</option>
            </select>
            <Link to="/forum/ask" className="btn" style={{marginLeft:8}}>Ask Question</Link>
          </div>
        </div>
        <div style={{marginTop:16}}>
          {sorted().length===0 ? <p className="muted">No questions yet</p> : sorted().map(t => <ForumCard key={t.id} t={t} />)}
        </div>
      </section>
    </>
  );
}
