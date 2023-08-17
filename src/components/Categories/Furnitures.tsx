import CategoryItems from './CategoryItems';
import Footer from '../layout/Footer';
import Newsletter from '../partials/Newsletter';

function Furnitures() {
  return (
    <>
      <CategoryItems category="furniture" />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Furnitures;
