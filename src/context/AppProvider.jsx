import React, { createContext, useContext, useEffect, useState } from "react";
import { products as mockProducts, threads as mockThreads, users as mockUsers } from "../mock/mockData";

const AppContext = createContext(null);

export function useApp() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [products] = useState(() => mockProducts);
  const [threads, setThreads] = useState(() => {
    try {
      const raw = localStorage.getItem("threads");
      return raw ? JSON.parse(raw) : mockThreads;
    } catch {
      return mockThreads;
    }
  });
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem("cart");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const defaultUser = { id: "u_me", name: "Aman Chahar", bio: "Frontend developer." };
  const mergedUsers = React.useMemo(() => {
    const exists = mockUsers.find(u => u.id === defaultUser.id);
    return exists ? mockUsers : [defaultUser, ...mockUsers];
  }, []);

  const [users] = useState(() => mergedUsers);
  const [currentUser] = useState(() => defaultUser);

  useEffect(() => {
    try { localStorage.setItem("threads", JSON.stringify(threads)); } catch {}
  }, [threads]);

  useEffect(() => {
    try { localStorage.setItem("cart", JSON.stringify(cart)); } catch {}
  }, [cart]);

  function addThread(newThread) {
    setThreads(prev => [newThread, ...prev]);
  }

  function replyToThread(threadId, reply) {
    setThreads(prev => prev.map(t => {
      if (t.id !== threadId) return t;
      const nextReplies = (t.repliesList || []).concat(reply);
      return { ...t, repliesList: nextReplies, replies: (t.replies || 0) + 1 };
    }));
  }

  function addToCart(item) {
    setCart(prev => {
      const found = prev.find(p => p.id === item.id);
      if (found) {
        return prev.map(p => p.id === item.id ? { ...p, qty: p.qty + 1 } : p);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  }

  function updateQty(id, delta) {
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i));
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(i => i.id !== id));
  }

  const value = {
    products,
    threads,
    addThread,
    replyToThread,
    cart,
    addToCart,
    updateQty,
    removeFromCart,
    users,
    currentUser
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
