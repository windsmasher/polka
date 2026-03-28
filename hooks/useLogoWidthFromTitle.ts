import { useLayoutEffect, useState, type RefObject } from 'react'

const LOGO_WIDTH_RATIO = 1.3
/** Gaps between 5 letters: P-o-l-k-a */
const LETTER_GAP_COUNT = 4

export function measureTitleWidth(el: HTMLElement): number | null {
  const base = el.offsetWidth
  if (base < 1) return null

  const ls = getComputedStyle(el).letterSpacing
  let extra = 0
  if (ls && ls !== 'normal') {
    const px = parseFloat(ls)
    if (!Number.isNaN(px)) {
      extra = px * LETTER_GAP_COUNT
    }
  }

  return Math.ceil((base + extra) * LOGO_WIDTH_RATIO)
}

export function useLogoWidthFromTitle(
  titleRef: RefObject<HTMLElement | null>,
): number | null {
  const [logoWidthPx, setLogoWidthPx] = useState<number | null>(null)

  useLayoutEffect(() => {
    const el = titleRef.current
    if (!el) return

    const update = () => {
      const w = measureTitleWidth(el)
      if (w !== null) setLogoWidthPx(w)
    }

    update()
    requestAnimationFrame(update)
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [titleRef])

  return logoWidthPx
}
