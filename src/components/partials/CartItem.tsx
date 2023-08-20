import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';

export type CartItemProps = {
  item: any;
  closeCart: () => void;
};

const CartItem = ({ item, closeCart }: CartItemProps) => {
  const { cartItem, setCartItem } = useContext(CartContext)!;

  const existingItem = cartItem.find((cartItem) => cartItem.id === item.id);

  const increase = () => {
    if (existingItem) {
      existingItem.quantity += 1;
      setCartItem([...cartItem]);
    } else {
      setCartItem([...cartItem, { ...item, quantity: 1 }]);
    }
  };

  const decrease = () => {
    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity -= 1;
      setCartItem([...cartItem]);
    }
  };

  const calcPrice = (quantity: number, itemPrice: number) => {
    return quantity * itemPrice;
  };

  const removeFromCart = (id: number) => {
    const updatedCart = cartItem.filter((item: any) => item.id !== id);
    setCartItem(updatedCart);
    const json = JSON.stringify(updatedCart);
    localStorage.setItem('cartItem', json);
  };

  return (
    <div className="cart-item">
      <Link to={`/categories/product/${item.id}`}>
        <div className="cart-img">
          <img src={item.img} alt="product" onClick={closeCart} />
        </div>
      </Link>
      <div className="cart-middle">
        <Link to={`/categories/product/${item.id}`}>
          <p className="cart-name" onClick={closeCart}>
            {item.description}
          </p>
        </Link>
        <div className="cart-btns">
          <button onClick={decrease}>-</button>
          <p className="quantity">{existingItem ? existingItem.quantity : 1}</p>
          <button onClick={increase}>+</button>
        </div>
      </div>
      <div className="cart-right">
        <p className="cart-price">
          {calcPrice(existingItem ? existingItem.quantity : 1, item.price)}.00$
        </p>
        <i
          onClick={() => removeFromCart(item.id)}
          className="fa-sharp fa-solid fa-xmark"
        ></i>
      </div>
    </div>
  );
};

export default CartItem;
