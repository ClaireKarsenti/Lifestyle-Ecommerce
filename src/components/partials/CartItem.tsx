import { useContext, useState } from 'react';
import { CartContext } from '../../App';

export type CartItemProps = {
  item: any;
};

const CartItem = ({ item }: CartItemProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const { cartItem, setCartItem } = useContext(CartContext)!;

  const increase = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
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
      <div className="cart-img">
        <img src={item.img} alt="product" />
      </div>
      <div className="cart-middle">
        <p className="cart-name">{item.description}</p>
        <div className="cart-btns">
          <button onClick={decrease}>-</button>
          <p className="quantity">{quantity}</p>
          <button onClick={increase}>+</button>
        </div>
      </div>
      <div className="cart-right">
        <p className="cart-price">{calcPrice(quantity, item.price)}.00$</p>
        <i
          onClick={() => removeFromCart(item.id)}
          className="fa-sharp fa-solid fa-xmark"
        ></i>
      </div>
    </div>
  );
};

export default CartItem;
