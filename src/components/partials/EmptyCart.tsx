import EmptyCartImg from '../../assets/img/cart/empty-cart.png';

export type EmptyCartProps = {
  openCart?: () => void;
};

function EmptyCart({ openCart }: EmptyCartProps) {
  return (
    <div className="empty-cart">
      <img src={EmptyCartImg} alt="empty-cart" />
      <p>Your cart is empty</p>
      <button onClick={openCart}>Keep Browsing</button>
    </div>
  );
}

export default EmptyCart;
