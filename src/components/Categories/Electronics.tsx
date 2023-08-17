import CategoryItems from './CategoryItems';
import Footer from '../layout/Footer';
import Newsletter from '../partials/Newsletter';

function Electronics() {
  return (
    <>
      <CategoryItems category="electronic" />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Electronics;
