import { ImageResponse } from 'next/og'
 
// Rozmiar obrazu
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Generator obrazu Open Graph
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #264653 0%, #2a9d8f 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 120, fontWeight: 'bold', marginBottom: 20 }}>
          FAMILIADA
        </div>
        <div style={{ display: 'flex', fontSize: 40, opacity: 0.9 }}>
          Gra Familijna Online • Multiplayer
        </div>
        <div style={{ display: 'flex', fontSize: 30, opacity: 0.7, marginTop: 20 }}>
          Zagraj z przyjaciółmi!
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
