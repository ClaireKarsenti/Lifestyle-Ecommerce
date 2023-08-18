import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { links } from '../../utils/FooterData';
import '../../assets/styles/Footer.css';

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-links">
          {links.map((link, index) => (
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/claire-karsenti/"
              key={index}
            >
              {link}
            </a>
          ))}
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
            target="_blank"
            rel="noreferrer"
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
