import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TrendingItem from './TrendingItem';
import '../../styles/TrendingSlider.css';

const TrendingSlider = () => {
  const slideLeft = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft -= 235;
    }
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft += 235;
    }
  };

  return (
    <div className="trending">
      <div className="container">
        <div className="title-btns">
          <h3>Our best sellers</h3>
          <div className="btns">
            <button title="scroll left" onClick={slideLeft}>
              <FontAwesomeIcon icon={['fas', 'arrow-left']} />
            </button>
            <button title="scroll right" onClick={slideRight}>
              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
            </button>
          </div>
        </div>
        <div className="row-container" id="slider">
          <TrendingItem />
        </div>
      </div>
    </div>
  );
};

export default TrendingSlider;
