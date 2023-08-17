import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../assets/styles/Footer.css';

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/claire-karsenti/">About</a>
          <a href="https://www.linkedin.com/in/claire-karsenti/">
            Store locator
          </a>
          <a href="https://www.linkedin.com/in/claire-karsenti/">FAQs</a>
          <a href="https://www.linkedin.com/in/claire-karsenti/">News</a>
          <a href="https://www.linkedin.com/in/claire-karsenti/">Careers</a>
          <a href="https://www.linkedin.com/in/claire-karsenti/">Contact Us</a>
        </div>
        <p className="love">
          <FontAwesomeIcon
            icon={['fas', 'code']}
            style={{ color: '#f2f6fd' }}
          />{' '}
          with{' '}
          <FontAwesomeIcon
            icon={['fas', 'heart']}
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
          using <FontAwesomeIcon icon={['fab', 'react']} />
        </p>
      </footer>
    </>
  );
}

export default Footer;
