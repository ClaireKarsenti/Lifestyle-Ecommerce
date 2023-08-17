import { Link } from 'react-router-dom';

export type CategoryButtonProps = {
  categories: any;
  filterItems: any;
};

const CategoryButton = ({ categories, filterItems }: CategoryButtonProps) => {
  return (
    <>
      {categories.map((category: string, index: number) => {
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
