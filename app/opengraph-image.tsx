import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'

export const alt = 'Polka – Salon fryzjerski'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#faf9f7',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            backgroundColor: '#c4a882',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '48px 64px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 132,
              fontWeight: 400,
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontStyle: 'italic',
              color: '#1a1a1a',
              letterSpacing: '0.02em',
              lineHeight: 1,
              marginBottom: 24,
            }}
          >
            Polka
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              fontFamily:
                'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              color: '#8b7355',
              maxWidth: 880,
              lineHeight: 1.45,
            }}
          >
            Salon fryzjersko trychologiczny.
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 56,
            left: '50%',
            marginLeft: -48,
            width: 96,
            height: 3,
            backgroundColor: '#c4a882',
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  )
}
