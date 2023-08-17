import React, { useEffect, useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Categories from './pages/Categories';
import All from './components/Categories/All';
import Furnitures from './components/Categories/Furnitures';
import Electronics from './components/Categories/Electronics';
import Lamps from './components/Categories/Lamps';
import Kitchen from './components/Categories/Kitchen';
import Chairs from './components/Categories/Chairs';
import SkinCare from './components/Categories/SkinCare';
import ProductPage from './pages/ProductPage';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far);

interface CartItem {
  id: number;
  description: string;
}

interface CartContextType {
  cartItem: CartItem[];
  addToCart: (item: CartItem) => void;
  setCartItem: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

function App() {
  const [cartItem, setCartItem] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItem([...cartItem, item]);
  };

  useEffect(() => {
    const json = localStorage.getItem('cartItem');
    const savedCart = json ? JSON.parse(json) : [];
    if (savedCart) {
      setCartItem(savedCart);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(cartItem);
    localStorage.setItem('cartItem', json);
  }, [cartItem]);

  return (
    <CartContext.Provider value={{ cartItem, addToCart, setCartItem }}>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />}>
          <Route path="all" element={<All />} />
          <Route path="furniture" element={<Furnitures />} />
          <Route path="electronic" element={<Electronics />} />
          <Route path="lamp" element={<Lamps />} />
          <Route path="kitchen" element={<Kitchen />} />
          <Route path="chair" element={<Chairs />} />
          <Route path="skin-care" element={<SkinCare />} />
        </Route>
        <Route path="categories/product/:id" element={<ProductPage />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;