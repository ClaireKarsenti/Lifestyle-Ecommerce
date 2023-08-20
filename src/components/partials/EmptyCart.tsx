import EmptyCartImg from '../../assets/img/cart/empty-cart.png';

export type EmptyCartProps = {
  closeCart?: () => void;
};

const EmptyCart = ({ closeCart }: EmptyCartProps) => {
  return (
    <div className="empty-cart">
      <img src={EmptyCartImg} alt="empty-cart" />
      <p>Your cart is empty</p>
      <button onClick={closeCart}>Keep Browsing</button>
    </div>
  );
};

export default EmptyCart;
