import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem';
import { CartContext } from '../../App';

const CartWithItems = () => {
  const { cartItem } = useContext(CartContext)!;

  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const newTotalPrice = cartItem.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItem]);

  return (
    <>
      <div className="full-cart-div">
        <div className="full-cart">
          {cartItem.map((item, id) =>
            cartItem.length !== 0 ? (
              <CartItem key={id} item={item} />
            ) : (
              <EmptyCart key={id} />
            )
          )}
        </div>
      </div>
      <div className="subtotal-div">
        <div className="sub-right">
          <p>Subtotal</p>
          <p className="total-price">{totalPrice.toFixed(2)}$</p>
        </div>
        <div className="sub-left">
          <Link to="/checkout">Go to Checkout</Link>
        </div>
      </div>
    </>
  );
};

export default CartWithItems;
