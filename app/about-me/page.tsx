import type { Metadata } from 'next'
import Link from 'next/link'

import BrandLockup from '@/components/BrandLockup'

const title = 'O mnie'

export const metadata: Metadata = {
  title,
  description:
    'Justyna i salon Polka — doświadczenie fryzjerskie, trychologia, holistyczne podejście i kameralna przestrzeń w Gliwicach.',
  openGraph: {
    title: `${title} | Polka`,
  },
}

export default function AboutPage() {
  return (
    <main className="main main--article main--article-with-brand">
      <article className="page-article" aria-labelledby="about-heading">
        <div className="under-construction__hero under-construction__hero--article">
          <BrandLockup titleAs="p" />
        </div>
        <h1 id="about-heading" className="page-article__title">
          O mnie
        </h1>

        <div className="page-article__lead">
          <p>Fryzjerstwo towarzyszy mi od ponad 20 lat.</p>
          <p>Z czasem zaczęłam widzieć, że za problemami włosów stoi coś więcej niż tylko wygląd.</p>
          <p>Dlatego poszłam dalej — w stronę trychologii.</p>
        </div>

        <section className="page-article__section" aria-labelledby="why-tricho-heading">
          <h2 id="why-tricho-heading" className="page-article__section-title">
            Dlaczego trychologia?
          </h2>
          <div className="page-article__prose">
            <p>
              Z czasem zaczęłam widzieć, że za problemami włosów często stoi coś głębiej. To był moment,
              w którym postanowiłam się zatrzymać i pójść dalej — zostawić to, co znane, żeby nauczyć się
              więcej o skórze głowy, organizmie i tym, co naprawdę wpływa na kondycję włosów.
            </p>
          </div>
        </section>

        <section className="page-article__section" aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="page-article__section-title">
            Doświadczenie i wiedza
          </h2>
          <ul className="page-article__list">
            <li>ponad 20 lat pracy jako fryzjer</li>
            <li>szkolenie trychologiczne w instytucie medycznym</li>
            <li>liczne szkolenia branżowe</li>
          </ul>
        </section>

        <section className="page-article__section" aria-labelledby="how-i-work-heading">
          <h2 id="how-i-work-heading" className="page-article__section-title">
            Jak pracuję
          </h2>
          <div className="page-article__prose">
            <p>Łączę fryzjerstwo z trychologią i podejściem holistycznym.</p>
            <p>Patrzę nie tylko na włosy, ale na cały organizm.</p>
            <p>Pracuję spokojnie, z uważnością i czasem dla Ciebie.</p>
          </div>
        </section>

        <section className="page-article__section" aria-labelledby="what-to-expect-heading">
          <h2 id="what-to-expect-heading" className="page-article__section-title">
            Czego możesz się spodziewać
          </h2>
          <div className="page-article__prose">
            <p>Polka to kameralna przestrzeń bez pośpiechu i presji.</p>
            <p>Jest czas na rozmowę, zrozumienie i indywidualne podejście.</p>
          </div>
        </section>

        <div className="page-article__closing" aria-label="Podsumowanie">
          <p>Zdrowe włosy to nie przypadek.</p>
          <p>To efekt zrozumienia i pracy od podstaw.</p>
        </div>

        <p className="page-article__signature" aria-label="Podpis autorki">
          Z szacunkiem Justyna.
        </p>

        <p className="page-article__back">
          <Link href="/" className="header__link">
            ← Strona główna
          </Link>
        </p>
      </article>
    </main>
  )
}
