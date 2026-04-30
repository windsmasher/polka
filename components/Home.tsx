'use client'

import BrandLockup from '@/components/BrandLockup'

export default function Home() {
  return (
    <section className="under-construction" aria-label="Strona główna">
      <div className="under-construction__hero">
        <BrandLockup titleAs="h1" />
        <p className="under-construction__hero-tagline">
          Zdrowe włosy zaczynają się od zrozumienia skóry głowy.
        </p>
        <div className="under-construction__hero-actions">
          <a
            href="https://booksy.com/pl-pl/dl/show-business/298223"
            className="under-construction__hero-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Umów wizytę
          </a>
        </div>
      </div>

      <div className="under-construction__intro-row">
        <div className="under-construction__intro-column">
          <h2 className="under-construction__section-title">Moje podejście</h2>
          <div className="under-construction__intro">
            <p>
              Polka to kameralny salon, w którym <strong>zdrowie włosów i skóry głowy</strong> jest
              priorytetem — nie jako hasło reklamowe, ale jako codzienna, uważna praca.
            </p>
            <p>
              Po <strong>ponad 20 latach</strong> w zawodzie fryzjera poszłam dalej: w trychologię,
              żeby <strong>realnie pomagać</strong>, nie tylko stylizować.
            </p>
            <p>
              Łączę <strong>doświadczenie</strong>, spojrzenie holistyczne i naturalne terapie —
              bez pośpiechu, z czasem na rozmowę i na Ciebie.
            </p>
            <p>
              Zapraszam do miejsca, w którym możesz poczuć się <strong>swobodnie — jak u siebie</strong>.
            </p>
          </div>
        </div>

        <figure className="under-construction__portrait">
          <img
            src="/hero-portrait.png"
            alt="Justyna — trycholog i fryzjerka w salonie Polka w Gliwicach"
            width={800}
            height={1200}
            decoding="async"
            className="under-construction__portrait-img"
          />
          <figcaption className="under-construction__portrait-caption">
            <span className="under-construction__portrait-name">Justyna</span>
            <span className="under-construction__portrait-role">
              Fryzjer i trycholog · 20+ lat doświadczenia
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
