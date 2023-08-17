import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../assets/styles/Footer.css';

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Store locator</a>
          <a href="#">FAQs</a>
          <a href="#">News</a>
          <a href="#">Careers</a>
          <a href="#">Contact Us</a>
        </div>
        <p className="love">
          <FontAwesomeIcon
            icon="fa-solid fa-code"
            style={{ color: '#f2f6fd' }}
          /> {' '}
          with{' '}
          <FontAwesomeIcon
            icon="fa-solid fa-heart"
            style={{ color: '#f2f6fd' }}
          />{' '}
          by{' '}
          <a
            rel="noopener"
            href="https://github.com/ClaireKarsenti"
            aria-label="My GitHub"
          >
            {' '}
            <span className="me">Claire Karsenti</span>
          </a>{' '}
          using <FontAwesomeIcon icon="fa-brands fa-react" />
        </p>
      </footer>
    </>
  );
}

export default Footer;
