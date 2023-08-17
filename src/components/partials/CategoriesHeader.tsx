import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryButton from '../global/CategoryButton';
import { items } from '../../utils/AllData';

interface Item {
  id: number;
  category: string;
}

function CategoriesHeader() {
  const allCategories = [
    'all',
    ...Array.from(new Set(items.map((item: Item) => item.category))),
  ];

  const [btnName, setBtnName] = useState<string>('All');
  const [productsArray, setProductsArray] = useState<Item[]>(items);

  const filterItems = (category: string) => {
    let updatedCategoryName = category;

    if (category === 'all') {
      setProductsArray(items);
      setBtnName('All');
    } else {
      const newItems = items.filter((item: Item) => item.category === category);
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
            categories={[...allCategories]} // Convert Set to Array using spread operator
            filterItems={filterItems}
          />
        </div>
      </div>
    </div>
  );
}

export default CategoriesHeader;
