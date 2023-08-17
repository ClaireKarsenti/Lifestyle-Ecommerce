import CategoryItems from './CategoryItems';
import Footer from '../layout/Footer';
import Newsletter from '../partials/Newsletter';

function Kitchen() {
  return (
    <>
      <CategoryItems category="kitchen" />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Kitchen;
