import Link from 'next/link'

const nav = [
  { href: '/', label: 'Strona główna' },
  { href: '/about-me', label: 'O mnie' },
] as const

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="header__logo" aria-label="Polka – strona główna">
        Polka
      </Link>
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
    </header>
  )
}
