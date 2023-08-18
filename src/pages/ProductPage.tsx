import React, { createContext, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import TrendingSlider from '../components/partials/TrendingSlider';
import Newsletter from '../components/partials/Newsletter';
import Footer from '../components/layout/Footer';
import { items } from '../utils/ProductsData';
import '../assets/styles/ProductPage.css';

interface Item {
  id: number;
  description: string;
  img: string;
  otherImgs: string[];
  specs: string;
  texture: string;
  weight: string;
  size: string;
  price: number;
}

export interface CartItem extends Item {}

export interface CartContextType {
  cartItem: CartItem[];
  addToCart: (item: CartItem) => void;
  setCartItem: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

const ProductPage = () => {
  const { id } = useParams<{ id?: string }>();
  const parsedId = id ? parseInt(id) : undefined;
  const item: Item[] = parsedId
    ? items.filter((item) => item.id === parsedId)
    : [];

  const [quantity, setQuantity] = useState<number>(1);
  const [image, setImage] = useState<string>(item[0].img);
  const [notify, setNotify] = useState<boolean>(false);

  const cartContext = useContext(CartContext);

  const changeImage = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    if (e.target instanceof HTMLImageElement) {
      setImage(e.target.src);
    }
  };

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

  const calcPrice = (quantity: number) => {
    return quantity * item[0].price;
  };

  const showNotify = () => {
    setNotify(!notify);
  };

  return (
    <>
      <div
        onAnimationEnd={() => setNotify(false)}
        className={`notify ${notify ? 'slide-in' : ''}`}
      >
        <p>Item has been added to the cart &nbsp; ✅</p>
      </div>

      <div className="product-page-div">
        <div className="container">
          <div className="product-div">
            <h3 className="product-big-name">{item[0].description}</h3>
            <div className="product-left">
              <div className="big-img">
                <img src={image} alt="product" />
              </div>
              <div className="small-imgs">
                <img
                  onMouseOver={changeImage}
                  src={item[0].img}
                  alt="product"
                />
                <img
                  onMouseOver={changeImage}
                  src={item[0].otherImgs[0]}
                  alt="product"
                />
                <img
                  onMouseOver={changeImage}
                  src={item[0].otherImgs[1]}
                  alt="product"
                />
              </div>
            </div>
            <div className="product-right">
              <p className="product-spec">{item[0].specs}</p>
              <div className="product-quant">
                <p>Quantity</p>
                <div className="product-btns">
                  <button onClick={decrease}>-</button>
                  <p className="quantity">{quantity}</p>
                  <button onClick={increase}>+</button>
                </div>
                <p className="product-price">{calcPrice(quantity)}.00$</p>
              </div>
              <div className="atc-buy">
                <button
                  onClick={() => {
                    if (cartContext) {
                      cartContext.addToCart(item[0]);
                      showNotify();
                    }
                  }}
                  className="atc-btn"
                >
                  add to cart
                </button>
                <button className="buy-btn">buy now</button>
              </div>
            </div>
          </div>

          <div className="specifications">
            <div className="spec">
              <p className="spec-title">Texture:</p>
              <p className="title-desc">{item[0].texture}</p>
            </div>
            <div className="spec">
              <p className="spec-title">Weight:</p>
              <p className="title-desc">{item[0].weight}</p>
            </div>
            <div className="spec">
              <p className="spec-title">Size:</p>
              <p className="title-desc">{item[0].size}</p>
            </div>
          </div>
        </div>
        <TrendingSlider />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
