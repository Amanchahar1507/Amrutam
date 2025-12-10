import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Ingredient from "./pages/Ingredient";
import Cart from "./pages/Cart";
import Forum from "./pages/Forum";
import Thread from "./pages/Thread";
import AskQuestion from "./pages/AskQuestion";
import Profile from "./pages/Profile";

export default function App(){
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/category/:slug" element={<Category />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/ingredient/:slug" element={<Ingredient />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/forum/thread/:id" element={<Thread />} />
          <Route path="/forum/ask" element={<AskQuestion />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
