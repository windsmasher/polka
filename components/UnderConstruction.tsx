'use client'

import { useLayoutEffect, useRef, useState } from 'react'

export default function UnderConstruction() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [logoWidthPx, setLogoWidthPx] = useState<number | null>(null)

  useLayoutEffect(() => {
    const el = titleRef.current
    if (!el) return

    const update = () => {
      const base = el.offsetWidth
      if (base < 1) return

      const ls = getComputedStyle(el).letterSpacing
      let extra = 0
      if (ls && ls !== 'normal') {
        const px = parseFloat(ls)
        if (!Number.isNaN(px)) {
          extra = px * 4 /* gaps between 5 letters: P-o-l-k-a */
        }
      }

      const WIDER_RATIO = 1.3
      setLogoWidthPx(Math.ceil((base + extra) * WIDER_RATIO))
    }

    update()
    requestAnimationFrame(update)
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

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
