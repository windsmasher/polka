type BrandLockupProps = {
  titleAs?: 'h1' | 'p'
}

export default function BrandLockup({ titleAs: Tag = 'h1' }: BrandLockupProps) {
  return (
    <div className="salon-home__brand">
      <Tag className="salon-home__brand-title">
        <img
          className="salon-home__logo"
          src="/polka-logo-transparent.png"
          alt="Polka"
          width={2000}
          height={2000}
          decoding="async"
        />
      </Tag>
    </div>
  )
}
