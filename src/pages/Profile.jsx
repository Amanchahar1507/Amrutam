import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, Link } from "react-router-dom";
import { useApp } from "../context/AppProvider";

function useQuery(){
  return new URLSearchParams(useLocation().search);
}

export default function Profile() {
  const q = useQuery();
  const { users, threads, currentUser } = useApp();
  const userid = q.get("user") || currentUser?.id;
  const u = users.find(x => x.id === userid) || { name: "User", bio: "" };
  const userThreads = threads.filter(t => t.author?.id === userid);
  return (
    <>
      <Helmet><title>{u.name} — Profile</title></Helmet>
      <section className="container-row">
        <div className="card" style={{maxWidth:760}}>
          <h2>{u.name}</h2>
          <p className="muted">{u.bio || "Bio not available."}</p>
          <div className="row">
            <button className="btn">Follow</button>
            <button className="btn ghost">Message</button>
          </div>
        </div>
        <div className="card" style={{maxWidth:760}}>
          <h3>Questions by {u.name}</h3>
          {userThreads.length === 0 ? <p className="muted">No questions posted yet.</p> :
            userThreads.map(t => <div key={t.id}><Link to={`/forum/thread/${t.id}`}>{t.title}</Link></div>)
          }
        </div>
      </section>
    </>
  );
}
