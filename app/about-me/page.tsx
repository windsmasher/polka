import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import BrandLockup from '@/components/BrandLockup'

const title = 'O mnie – Justyna, fryzjer i trycholog w Gliwicach'

export const metadata: Metadata = {
  title,
  description:
    'Justyna — fryzjer i trycholog z Gliwic. 20+ lat doświadczenia, szkolenie trychologiczne, holistyczne podejście do zdrowia włosów i skóry głowy. Salon Polka, ul. Daszyńskiego 226B.',
  alternates: {
    canonical: '/about-me',
  },
  openGraph: {
    title: `${title} | Polka`,
    url: 'https://www.salonpolka.pl/about-me',
  },
}

export default function AboutPage() {
  return (
    <main className="main main--article main--article-with-brand">
      <article className="page-article page-article--with-photo" aria-labelledby="about-heading">
        <div className="salon-home__hero salon-home__hero--article">
          <BrandLockup titleAs="p" />
        </div>
        <h1 id="about-heading" className="page-article__title">
          O mnie
        </h1>

        <div className="page-article__photo-block">
          <div className="page-article__photo-block-text">
            <div className="page-article__lead">
              <p>Fryzjerstwo towarzyszy mi od ponad 20 lat.</p>
              <p>Przez ten czas coraz częściej widziałam, że problemy z włosami rzadko dotyczą tylko włosów.</p>
              <p>To skłoniło mnie do nauki trychologii.</p>
            </div>

            <section className="page-article__section" aria-labelledby="why-tricho-heading">
              <h2 id="why-tricho-heading" className="page-article__section-title">
                Dlaczego trychologia?
              </h2>
              <div className="page-article__prose">
                <p>
                  Trafiały do mnie klientki z wypadaniem włosów, łamliwością, problemami ze skórą głowy —
                  i wiedziałam, że sama zmiana szamponu czy odżywki tu nie wystarczy. Zaczęłam szukać
                  głębiej. Ukończyłam szkolenie trychologiczne w instytucie medycznym i zrozumiałam,
                  że włosy to często odbicie tego, co dzieje się w całym organizmie.
                </p>
              </div>
            </section>
          </div>

          <Image
            src="/hero-good.webp"
            alt="Justyna – fryzjer i trycholog"
            width={4284}
            height={5712}
            className="page-article__main-photo"
            priority
          />
        </div>

        <section className="page-article__section" aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="page-article__section-title">
            Doświadczenie
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
            <p>
              Każda wizyta zaczyna się od rozmowy. Pytam o zdrowie, dietę, styl życia — bo to wszystko ma wpływ na kondycję włosów.
              Na tej podstawie razem ustalamy, co ma sens.
            </p>
          </div>
        </section>

        <section className="page-article__section" aria-labelledby="what-to-expect-heading">
          <h2 id="what-to-expect-heading" className="page-article__section-title">
            Czego możesz się spodziewać
          </h2>
          <div className="page-article__prose">
            <p>
              Polka to małe, spokojne miejsce. Nie ma tu kolejek ani pośpiechu.
              Jest czas na to, żeby dobrze porozmawiać i zaplanować to, co naprawdę potrzebne.
            </p>
          </div>
        </section>

        <p className="page-article__signature" aria-label="Podpis autorki">
          Justyna
        </p>

        <p className="page-article__back">
          <Link href="/" className="page-article__back-link">
            Strona główna
          </Link>
        </p>
      </article>
    </main>
  )
}
