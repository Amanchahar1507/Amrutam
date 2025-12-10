import React from "react";
import { Helmet } from "react-helmet-async";
import { useApp } from "../context/AppProvider";

export default function Cart() {
  const { cart, updateQty, removeFromCart } = useApp();
  const total = cart.reduce((s, it) => s + it.price * it.qty, 0);
  return (
    <>
      <Helmet>
        <title>Cart — Amrutam</title>
      </Helmet>
      <section className="container-row">
        <h2>Your cart</h2>
        {cart.length === 0 ? (
          <p className="muted">Your cart is empty.</p>
        ) : (
          <div>
            {cart.map(it => (
              <div key={it.id} className="card" style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
                <div>
                  <strong>{it.name}</strong>
                  <div className="muted">₹{it.price} each</div>
                </div>
                <div className="row">
                  <button className="btn ghost" onClick={() => updateQty(it.id, -1)}>-</button>
                  <div style={{padding:"0 10px"}}>{it.qty}</div>
                  <button className="btn ghost" onClick={() => updateQty(it.id, +1)}>+</button>
                  <button className="btn" onClick={() => removeFromCart(it.id)} style={{marginLeft:8}}>Remove</button>
                </div>
              </div>
            ))}
            <div className="card" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div><strong>Total</strong></div>
              <div><strong>₹{total}</strong></div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
