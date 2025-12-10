import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppProvider";

export default function AskQuestion() {
  const { addThread, currentUser } = useApp();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("skincare");
  const [content, setContent] = useState("");
  const [attachment, setAttachment] = useState(null);
  const navigate = useNavigate();
  function onFile(e) {
    const file = e.target.files[0];
    if (file) setAttachment({ name: file.name, size: file.size });
  }
  function submit(e) {
    e.preventDefault();
    if (!title || !content) {
      alert("Please provide title and description");
      return;
    }
    const newThread = {
      id: "q" + Date.now(),
      title,
      author: { id: currentUser.id, name: currentUser.name },
      votes: 0,
      createdAt: Date.now(),
      recommended: 0,
      content,
      category,
      attachments: attachment ? [attachment] : [],
      repliesList: []
    };
    addThread(newThread);
    navigate("/forum");
  }
  return (
    <>
      <Helmet><title>Ask Question — Forum</title></Helmet>
      <section className="container-row">
        <h2>Ask a Question</h2>
        <form onSubmit={submit} className="card" style={{display:"grid",gap:12,maxWidth:720}}>
          <label>
            Title
            <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Short, clear title" />
          </label>
          <label>
            Category
            <select value={category} onChange={(e)=>setCategory(e.target.value)}>
              <option value="skincare">Skincare</option>
              <option value="hair">Hair</option>
              <option value="body">Body</option>
            </select>
          </label>
          <label>
            Description
            <textarea value={content} onChange={(e)=>setContent(e.target.value)} rows={6} />
          </label>
          <label>
            Attachment (optional)
            <input type="file" onChange={onFile} />
            {attachment && <div className="muted small">Selected: {attachment.name}</div>}
          </label>
          <div className="row">
            <button className="btn" type="submit">Post question</button>
            <button className="btn ghost" type="button" onClick={()=>{setTitle(""); setContent(""); setAttachment(null);}}>Reset</button>
          </div>
        </form>
      </section>
    </>
  );
}
