type BrandLockupProps = {
  titleAs?: 'h1' | 'p'
}

export default function BrandLockup({ titleAs: Tag = 'h1' }: BrandLockupProps) {
  return (
    <div className="under-construction__brand">
      <Tag className="under-construction__brand-title">
        <img
          className="under-construction__logo"
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
