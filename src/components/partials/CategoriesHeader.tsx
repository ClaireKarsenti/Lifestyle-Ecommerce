import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CategoryButton from '../global/CategoryButton';
import useCategoriesHeaderController from '../../controllers/CategoriesHeaderController';

const CategoriesHeader = () => {
  const { state, controller, allCategories } = useCategoriesHeaderController();

  return (
    <div className="container">
      <div className="catego-header">
        <div className="title-home">
          <Link onClick={() => window.scrollTo(0, 0)} to="/">
            <FontAwesomeIcon icon={['fas', 'angle-left']} /> Home
          </Link>
          <h3>{state.btnName}</h3>
        </div>
        <div className="filter-btns">
          <CategoryButton
            categories={[...allCategories]}
            filterItems={controller.filterItems}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoriesHeader;
