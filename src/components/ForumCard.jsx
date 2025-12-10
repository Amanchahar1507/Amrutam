import React from "react";
import { Link } from "react-router-dom";

export default function ForumCard({ t }) {
  return (
    <article className="forum-card">
      <h4><Link to={`/forum/thread/${t.id}`}>{t.title}</Link></h4>
      <p className="muted">{t.content.slice(0, 110)}{t.content.length>110?"...":""}</p>
      <div className="row small muted">
        <span>By <Link to={`/profile?user=${t.author.id}`}>{t.author.name}</Link></span>
        <span>{t.votes} votes</span>
        <span>{t.category}</span>
      </div>
    </article>
  );
}
