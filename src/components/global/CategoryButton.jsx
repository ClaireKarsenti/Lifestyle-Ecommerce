import React from 'react';
import { Link } from 'react-router-dom';

const CategoryButton = ({ categories, filterItems }) => {
  return (
    <>
      {categories.map((category, index) => {
        let categoryDisplayName = category;
        if (['chair', 'furniture', 'lamp', 'electronic'].includes(category)) {
          categoryDisplayName = category + 's';
        }
        return (
          <Link to={`${category}`} key={index}>
            <button
              onClick={() => {
                filterItems(category);
              }}
            >
              {categoryDisplayName}
            </button>
          </Link>
        );
      })}
    </>
  );
};

export default CategoryButton;
