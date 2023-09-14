import ProductItem from './ProductItem';
import '../../styles/ProudProducts.css';

const ProudProducts = () => {
  return (
    <div className="proud-container">
      <h2 className="container proud-h2">New arrivals selected for you</h2>
      <div className="container">
        <div className="products-grid">
          <ProductItem />
        </div>
      </div>
    </div>
  );
};

export default ProudProducts;
