import { Link } from 'react-router-dom';
import { gridCategories } from '../../utils/HeroData';
import '../../styles/Header.css';

const Hero = () => {
  return (
    <div className="home-container">
      <div className="container">
        <div className="grid-container">
          {gridCategories.map((category, index) => (
            <div className={`featured ${category.class}`} key={index}>
              <Link to={`categories/${category.to}`}>
                <div id="img1" className="lil-overlay"></div>
                <img src={category.src} alt={category.id} />
                <p className="main-description">{category.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
