import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const runtime = 'nodejs';
export const alt = 'Basit Ali Aluminum & Glass Work - Lahore';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
  const logoData = await readFile(
    join(process.cwd(), 'public/assets/aistudio/ChatGPT_Image_Sep_30__2026__03_47_25_PM_f9e8138f.png')
  );
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
          padding: '60px',
          gap: '50px',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '320px',
            height: '320px',
            borderRadius: '30px',
            background: 'white',
            padding: '20px',
            flexShrink: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoBase64}
            alt="Logo"
            width={280}
            height={280}
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Text content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: '52px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: '16px',
            }}
          >
            Basit Ali Aluminum & Glass Work
          </div>
          <div
            style={{
              fontSize: '26px',
              color: '#f59e0b',
              fontWeight: 600,
              marginBottom: '24px',
            }}
          >
            Lahore
          </div>
          <div
            style={{
              fontSize: '22px',
              color: '#94a3b8',
              lineHeight: 1.5,
            }}
          >
            Premium Aluminum Windows, Doors, Glass Partitions, Shower Cabins & Emergency Repair Services
          </div>
          <div
            style={{
              fontSize: '24px',
              color: '#f59e0b',
              fontWeight: 700,
              marginTop: '20px',
            }}
          >
            Call 0320-2740066
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
