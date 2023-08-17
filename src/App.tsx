import React, { useEffect, useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Categories from './pages/Categories';
import ProductPage from './pages/ProductPage';
import All from './components/Categories/All';
import Furnitures from './components/Categories/Furnitures';
import Electronics from './components/Categories/Electronics';
import Lamps from './components/Categories/Lamps';
import Kitchen from './components/Categories/Kitchen';
import Chairs from './components/Categories/Chairs';
import SkinCare from './components/Categories/SkinCare';
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

const categories = [
  { path: 'all', label: All },
  { path: 'furniture', label: Furnitures },
  { path: 'electronic', label: Electronics },
  { path: 'lamp', label: Lamps },
  { path: 'kitchen', label: Kitchen },
  { path: 'chair', label: Chairs },
  { path: 'skin-care', label: SkinCare },
];

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
          {categories.map((category) => (
            <Route
              key={category.path}
              path={category.path}
              element={<category.label />}
            />
          ))}
        </Route>
        <Route path="categories/product/:id" element={<ProductPage />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
