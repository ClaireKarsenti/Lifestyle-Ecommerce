import { Link } from 'react-router-dom';
import { items } from '../../utils/ProductsData';

export type CategoryItemsProps = {
  category?: string;
};

const CategoryItems = ({ category }: CategoryItemsProps) => {
  let filteredItems;

  if (category) {
    filteredItems = items.filter((item) => item.category === category);
  } else {
    filteredItems = items;
  }

  return (
    <div className="proud-container">
      <div className="container">
        <div className="products-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="product normal">
              <Link
                data-testid="item-link"
                onClick={() => window.scrollTo(0, 0)}
                to={`/categories/product/${item.id}`}
              >
                <div className="product-header">
                  <img src={item.img} alt="product1" />
                </div>
                <div className="product-details">
                  <p>{item.description}</p>
                  <p className="item-price">{item.price}$</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryItems;
