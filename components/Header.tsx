import Link from 'next/link'
import IconInstagram from './icons/IconInstagram'
import IconFacebook from './icons/IconFacebook'

const nav = [
  { href: '/about-me', label: 'O mnie' },
] as const

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="header__logo" aria-label="Polka – strona główna">
        Polka
      </Link>
      <div className="header__right">
        <nav className="header__nav" aria-label="Nawigacja główna">
          <ul className="header__nav-list">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="header__link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__socials" aria-label="Social media">
          <a
            href="https://www.instagram.com/justyna_paczka"
            className="header__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <IconInstagram className="header__social-icon" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100057305956163"
            className="header__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <IconFacebook className="header__social-icon" />
          </a>
        </div>
        <a
          href="https://booksy.com/pl-pl/dl/show-business/298223"
          className="header__cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Umów wizytę
        </a>
      </div>
    </header>
  )
}
