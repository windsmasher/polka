'use client'

import { useEffect } from 'react'
import BrandLockup from '@/components/BrandLockup'

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal')
    if (!els.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return (
    <section className="salon-home" aria-label="Strona główna">
      <div className="salon-home__hero">
        <BrandLockup titleAs="h1" />
        <p className="salon-home__hero-tagline">
          Salon Fryzjersko Trychologiczny w Gliwicach.
        </p>
        <div className="salon-home__hero-actions">
          <a
            href="https://booksy.com/pl-pl/dl/show-business/298223"
            className="salon-home__hero-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Umów wizytę
          </a>
        </div>
      </div>

      <div className="salon-home__intro-row">
        <div className="salon-home__intro-column">
          <h2 className="salon-home__section-title reveal">Moje podejście</h2>
          <div className="salon-home__intro reveal reveal--delay-1">
            <p>
              Polka to mały salon, w którym <strong>zdrowie włosów i skóry głowy</strong> jest priorytetem.
            </p>
            <p>
              Po <strong>ponad 20 latach</strong> w zawodzie fryzjera zrobiłam szkolenie trychologiczne —
              żeby rozumieć problemy głębiej, nie tylko je maskować.
            </p>
            <p>
              Pracuję bez pośpiechu — z czasem na rozmowę i na to, co naprawdę potrzebne.
            </p>
            <p>
              Zapraszam.
            </p>
          </div>
        </div>

        <figure className="salon-home__portrait reveal reveal--delay-2">
          <img
            src="/hero-portrait.png"
            alt="Justyna — trycholog i fryzjerka w salonie Polka w Gliwicach"
            width={800}
            height={1200}
            decoding="async"
            className="salon-home__portrait-img"
          />
          <figcaption className="salon-home__portrait-caption">
            <span className="salon-home__portrait-name">Justyna</span>
            <span className="salon-home__portrait-role">
              Fryzjer i trycholog · 20+ lat doświadczenia
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
