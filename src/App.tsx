import React, { useEffect, useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Categories from './pages/Categories';
import ProductPage from './pages/ProductPage';
import CategoryPage from './components/global/CategoryPage';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far);

export interface CartItem {
  id: number;
  description: string;
  img: string;
  price: number;
  quantity: number;
}

export interface CartContextType {
  cartItem: CartItem[];
  addToCart: (item: CartItem, quantity: number) => void;
  setCartItem: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

const categories = [
  'all',
  'furniture',
  'electronic',
  'lamp',
  'kitchen',
  'chair',
  'skin-care',
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
          {categories.map((category, index) => (
            <Route
              key={index}
              path={category}
              element={
                <CategoryPage category={category !== 'all' ? category : ''} />
              }
            />
          ))}
        </Route>
        <Route path="categories/product/:id" element={<ProductPage />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
