import { Outlet } from 'react-router';
import CategoriesHeader from '../components/partials/CategoriesHeader';
import '../styles/ProudProducts.css';

const Categories = () => {
  return (
    <>
      <CategoriesHeader />
      <Outlet />
    </>
  );
};

export default Categories;
