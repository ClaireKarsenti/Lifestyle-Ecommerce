import CategoryItems from './CategoryItems';
import Footer from '../layout/Footer';
import Newsletter from '../partials/Newsletter';

interface CategoryPageProps {
  category?: string;
}

const CategoryPage = ({ category }: CategoryPageProps) => {
  return (
    <>
      <CategoryItems category={category} />
      <Newsletter />
      <Footer />
    </>
  );
};

export default CategoryPage;
