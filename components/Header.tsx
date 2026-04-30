import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="header__logo" aria-label="Polka – strona główna">
        Polka
      </Link>
      <div className="header__right">
        <nav className="header__nav" aria-label="Nawigacja główna">
          <ul className="header__nav-list">
            <li>
              <Link href="/about-me" className="header__link header__link--outline">
                O mnie
              </Link>
            </li>
          </ul>
        </nav>
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
