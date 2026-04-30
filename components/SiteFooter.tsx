import IconInstagram from './icons/IconInstagram'
import IconFacebook from './icons/IconFacebook'
import IconBooksy from './icons/IconBooksy'

export default function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="Kontakt">
      <div className="site-footer__inner">
        <div className="site-footer__contact">
          <p className="site-footer__salon-name">Polka</p>
          <p className="site-footer__line">Salon fryzjersko trychologiczny · Gliwice</p>
          <p className="site-footer__line">ul. Daszyńskiego 226B</p>
          <p className="site-footer__line">
            <a href="tel:+48575509531" className="site-footer__link">
              575 509 531
            </a>
          </p>
        </div>
        <div className="site-footer__socials" aria-label="Social media">
          <a
            href="https://www.instagram.com/justyna_paczka"
            className="site-footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <IconInstagram className="site-footer__social-icon" />
            <span className="site-footer__social-label">Instagram</span>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100057305956163"
            className="site-footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <IconFacebook className="site-footer__social-icon" />
            <span className="site-footer__social-label">Facebook</span>
          </a>
          <a
            href="https://booksy.com/pl-pl/dl/show-business/298223"
            className="site-footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Booksy"
          >
            <IconBooksy className="site-footer__booksy-logo" />
            <span className="site-footer__social-label">Booksy</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
