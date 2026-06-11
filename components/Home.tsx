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
        <BrandLockup titleAs="h1" srText="Salon Polka – Fryzjer Gliwice | Fryzjerstwo Trychologiczne" />
        <p className="salon-home__hero-tagline salon-home__hero-tagline--location">
          Salon Polka · Gliwice
        </p>
        <p className="salon-home__hero-tagline">
          Fryzjerstwo Trychologiczne
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
            src="/best-hero.webp"
            alt="Justyna — trycholog i fryzjerka w salonie Polka w Gliwicach"
            width={4284}
            height={5712}
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

      <div className="salon-home__gallery-section">
        <h2 className="salon-home__section-title reveal">O salonie</h2>
        <p className="salon-home__parking-info reveal">Dostępne bezpłatne miejsca parkingowe wzdłuż ogrodzenia.</p>
        <div className="salon-home__gallery reveal reveal--delay-1">
          <figure className="salon-home__gallery-item">
            <img
              src="/storefront.webp"
              alt="Wejście do salonu Polka w Gliwicach"
              width={800}
              height={600}
              decoding="async"
              className="salon-home__gallery-img"
            />
          </figure>
          <figure className="salon-home__gallery-item">
            <img
              src="/home.webp"
              alt="Salon fryzjerski Polka w Gliwicach — wejście do budynku przy ul. Daszyńskiego 226B"
              width={800}
              height={600}
              decoding="async"
              className="salon-home__gallery-img"
            />
          </figure>
          <figure className="salon-home__gallery-item">
            <img
              src="/salon.webp"
              alt="Wnętrze salonu fryzjerskiego Polka w Gliwicach — stanowiska fryzjerskie"
              width={800}
              height={600}
              decoding="async"
              className="salon-home__gallery-img"
            />
          </figure>
          <figure className="salon-home__gallery-item">
            <img
              src="/salon2.webp"
              alt="Salon Polka w Gliwicach — strefa pracy fryzjera i trychologa"
              width={800}
              height={600}
              decoding="async"
              className="salon-home__gallery-img"
            />
          </figure>
          <figure className="salon-home__gallery-item">
            <img
              src="/salon3.webp"
              alt="Bezpłatny parking wzdłuż ogrodzenia przy salonie Polka w Gliwicach"
              width={800}
              height={600}
              decoding="async"
              className="salon-home__gallery-img"
            />
          </figure>
        </div>
        <p className="salon-home__gallery-hint" aria-hidden="true">przesuwaj →</p>
      </div>
    </section>
  )
}
