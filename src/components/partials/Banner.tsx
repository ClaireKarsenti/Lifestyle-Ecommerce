import { Link } from 'react-router-dom';
import '../../styles/Banner.css';

export type BannerProps = {
  className: string;
  title: string;
  text: string;
  img: string;
};

const Banner = ({ className, title, text, img }: BannerProps) => {
  return (
    <div className="banner">
      <div className="container">
        <div className={className}>
          <div className="text-side">
            <div className="text">
              <h2>{title}</h2>
              <p>{text}</p>
              <Link onClick={() => window.scrollTo(0, 0)} to="categories/all">
                <button>Shop now</button>
              </Link>
            </div>
          </div>
          <div className="img-side">
            <img src={img} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
