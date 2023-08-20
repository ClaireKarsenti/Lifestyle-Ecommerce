import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartWithItems from '../partials/CartWithItems';
import EmptyCart from '../partials/EmptyCart';
import LogoImg2 from '../../assets/img/newlogo2.png';
import useNavbarController from '../../controllers/NavbarController';
import '../../assets/styles/Navbar.css';
import { CartContext, CartItem } from '../../App';

const Navbar = () => {
  const { state, controller } = useNavbarController();

  const cartContext = useContext(CartContext);

  const cartItem: CartItem[] = cartContext?.cartItem || [];

  const cartItemQuantity = cartItem.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <div
        className={`mobile-nav-full ${
          state.mobileNav ? 'open-flex' : 'closed-flex'
        }`}
      >
        <i
          onClick={controller.closeNavMobile}
          className="fa-sharp fa-solid fa-xmark"
        ></i>
        <div className="mobile-links">
          <Link onClick={controller.closeNavMobile} to="/categories/all">
            categories
          </Link>
          <Link onClick={controller.closeNavMobile} to="/categories/product/19">
            product page
          </Link>
        </div>
      </div>

      <div
        onClick={controller.openCart}
        className={`page-overlay ${state.cart ? 'open-flex' : 'closed-flex'}`}
      ></div>

      <div className={`cart-div ${state.cart ? 'open-cart' : 'closed-cart'}`}>
        <div className="cart-title-btn">
          <h2 className="cart-full-h2">
            Your Shopping Cart ({cartItemQuantity})
          </h2>
          <i
            onClick={controller.closeCart}
            className="fa-sharp fa-solid fa-xmark"
          ></i>
        </div>

        <div className="cart-body">
          {cartItem.length < 1 ? (
            <EmptyCart openCart={controller.closeCart} />
          ) : (
            <CartWithItems />
          )}
        </div>
      </div>

      <nav className="navbar">
        <div className="container">
          <div className={`nav-container ${state.sticky ? 'cont-sticky' : ''}`}>
            <Link to="/">
              <img
                onClick={controller.scrollToTop}
                src={LogoImg2}
                alt="logo"
                className="logo-img"
              />
            </Link>
            <div className="nav-links">
              <Link onClick={() => window.scrollTo(0, 0)} to="/categories/all">
                categories
              </Link>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/categories/product/15"
              >
                product page
              </Link>
              <i
                data-array-length={cartItemQuantity}
                onClick={controller.openCart}
                className={`fa-solid fa-cart-shopping ${
                  cartItem.length < 1 ? 'cart-icon' : 'cart-icon with-items'
                }`}
              ></i>
            </div>
            <div className="hamburger-menu">
              <i
                data-array-length={cartItemQuantity}
                onClick={controller.openCart}
                className={`fa-solid fa-cart-shopping ${
                  cartItem.length < 1 ? 'cart-icon' : 'cart-icon with-items'
                }`}
              ></i>
              <i
                onClick={controller.openNavMobile}
                className="fa-solid fa-bars hamburger-hamb"
              ></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
