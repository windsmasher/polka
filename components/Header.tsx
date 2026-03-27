import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="header__logo" aria-label="Polka – strona główna">
        Polka
      </Link>
    </header>
  )
}
