import { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryButton from '../global/CategoryButton';
import { items } from '../../utils/AllData';

function CategoriesHeader() {
  const allCategories = ['all', ...new Set(items.map((item) => item.category))];

  const [btnName, setBtnName] = useState('All');
  const [productsArray, setProductsArray] = useState(items);

  const filterItems = (category) => {
    let updatedCategoryName = category;

    if (category === 'all') {
      setProductsArray(items);
      setBtnName('All');
    } else {
      const newItems = items.filter((item) => item.category === category);
      setProductsArray(newItems);

      if (['chair', 'furniture', 'lamp', 'electronic'].includes(category)) {
        updatedCategoryName = category + 's';
      }

      setBtnName(updatedCategoryName);
    }
  };

  return (
    <div className="container">
      <div className="catego-header">
        <div className="title-home">
          <Link onClick={() => window.scrollTo(0, 0)} to="/">
            <i className="fa-solid fa-angle-left"></i> Home
          </Link>
          <h3>{btnName}</h3>
        </div>
        <div className="filter-btns">
          <CategoryButton
            categories={allCategories}
            filterItems={filterItems}
          />
        </div>
      </div>
    </div>
  );
}

export default CategoriesHeader;
