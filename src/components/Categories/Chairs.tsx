import CategoryItems from './CategoryItems';
import Footer from '../layout/Footer';
import Newsletter from '../partials/Newsletter';

function Chairs() {
  return (
    <>
      <CategoryItems category="chair" />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Chairs;
