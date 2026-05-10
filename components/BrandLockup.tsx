type BrandLockupProps = {
  titleAs?: 'h1' | 'p'
  srText?: string
}

export default function BrandLockup({ titleAs: Tag = 'h1', srText }: BrandLockupProps) {
  return (
    <div className="salon-home__brand">
      <Tag className="salon-home__brand-title">
        <img
          className="salon-home__logo"
          src="/polka-logo-transparent.png"
          alt="Polka — salon fryzjerski w Gliwicach"
          width={2000}
          height={2000}
          decoding="async"
        />
        {srText ? <span className="sr-only">{srText}</span> : null}
      </Tag>
    </div>
  )
}
