'use client'

import { useRef, type RefObject } from 'react'

import { useLogoWidthFromTitle } from '@/hooks/useLogoWidthFromTitle'

type BrandLockupProps = {
  /** Use `h1` on the home hero; use `p` on inner pages so the page keeps a single real `h1`. */
  titleAs?: 'h1' | 'p'
}

export default function BrandLockup({ titleAs = 'h1' }: BrandLockupProps) {
  const titleRef = useRef<HTMLHeadingElement | HTMLParagraphElement>(null)
  const logoWidthPx = useLogoWidthFromTitle(titleRef as RefObject<HTMLElement | null>)

  return (
    <div className="under-construction__brand">
      {titleAs === 'h1' ? (
        <h1 ref={titleRef} className="under-construction__message">
          Polka
        </h1>
      ) : (
        <p ref={titleRef} className="under-construction__message" aria-label="Polka">
          Polka
        </p>
      )}
      <div
        className="under-construction__logo-wrap"
        style={{
          width: logoWidthPx ?? 'min(98%, 19rem)',
        }}
      >
        <img
          className="under-construction__logo"
          src="/polka-logo.png"
          alt=""
          width={696}
          height={1024}
          decoding="async"
        />
      </div>
    </div>
  )
}
