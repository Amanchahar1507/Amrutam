import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const disabled = { cursor: "not-allowed", opacity: 0.6 };

  return (
    <header className="nav">
      <div className="nav-inner container-row">
        <div className="brand" onClick={() => navigate("/")}>Amrutam</div>
        <nav className="nav-links" aria-label="Main Navigation">
          <span className="nav-item disabled" style={disabled}>Home</span>
          <span className="nav-item disabled" style={disabled}>FindDoctor</span>
          <span className="nav-item disabled" style={disabled}>LabTests</span>
          <NavLink to="/shop" className={({isActive}) => isActive ? "active nav-item" : "nav-item"}>Shop</NavLink>
          <NavLink to="/forum" className={({isActive}) => isActive ? "active nav-item" : "nav-item"}>Forum</NavLink>
          <span className="nav-item disabled" style={disabled}>About</span>
        </nav>
        <div className="profile-mini" onClick={() => navigate("/profile")}>A</div>
      </div>
    </header>
  );
}
