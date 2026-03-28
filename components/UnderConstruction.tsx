'use client'

import { useRef } from 'react'

import { useLogoWidthFromTitle } from '@/hooks/useLogoWidthFromTitle'

export default function UnderConstruction() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const logoWidthPx = useLogoWidthFromTitle(titleRef)

  return (
    <section className="under-construction" aria-label="Informacja o budowie strony">
      <div className="under-construction__brand">
        <h1 ref={titleRef} className="under-construction__message">
          Polka
        </h1>
        <div
          className="under-construction__logo-wrap"
          style={{
            width: logoWidthPx ?? 'min(98%, 19rem)',
          }}
        >
          <img
            className="under-construction__logo"
            src="/polka-logo.svg"
            alt=""
            width={696}
            height={1024}
            decoding="async"
          />
        </div>
      </div>
      <p className="under-construction__subtitle">
        Niedługo zaprezentujemy nową stronę salonu fryzjerskiego Polka.
      </p>
      <div className="under-construction__divider" aria-hidden="true" />
    </section>
  )
}
