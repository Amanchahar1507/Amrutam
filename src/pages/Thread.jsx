import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useApp } from "../context/AppProvider";

export default function Thread() {
  const { id } = useParams();
  const { threads, replyToThread, currentUser } = useApp();
  const t = threads.find(x => x.id === id);
  const [replyText, setReplyText] = useState("");
  if (!t) return <div className="center">Question not found</div>;
  function submitReply(e) {
    e.preventDefault();
    if (!replyText.trim()) return;
    const reply = {
      id: "r" + Date.now(),
      author: { id: currentUser.id, name: currentUser.name },
      text: replyText.trim(),
      createdAt: Date.now()
    };
    replyToThread(t.id, reply);
    setReplyText("");
  }
  return (
    <>
      <Helmet>
        <title>{t.title} — Forum</title>
      </Helmet>
      <article className="container-row">
        <h1>{t.title}</h1>
        <div className="muted small">By <Link to={`/profile?user=${t.author.id}`}>{t.author.name}</Link> • {new Date(t.createdAt).toLocaleString()}</div>
        <div className="card" style={{marginTop:12}}>
          <p>{t.content}</p>
          {t.attachments && t.attachments.length>0 && (
            <div>
              <h4>Attachments</h4>
              <ul>{t.attachments.map((a,i)=> <li key={i}>{a.name}</li>)}</ul>
            </div>
          )}
        </div>
        <section style={{marginTop:16}}>
          <h3>Replies ({(t.repliesList||[]).length})</h3>
          {(t.repliesList || []).map(r => (
            <div key={r.id} className="card" style={{marginBottom:8}}>
              <div className="row between">
                <div><strong>{r.author.name}</strong> <div className="muted small">{new Date(r.createdAt).toLocaleString()}</div></div>
              </div>
              <p>{r.text}</p>
            </div>
          ))}
          <form onSubmit={submitReply} style={{marginTop:12}}>
            <textarea value={replyText} onChange={(e)=>setReplyText(e.target.value)} rows={3} placeholder="Write your reply..." />
            <div className="row" style={{marginTop:8}}>
              <button className="btn" type="submit">Reply</button>
            </div>
          </form>
        </section>
      </article>
    </>
  );
}
