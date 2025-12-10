import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-row between">
        <div>© {new Date().getFullYear()} Amrutam</div>
        <div className="muted small">Built for assignment — React + Vite</div>
      </div>
    </footer>
  );
}
