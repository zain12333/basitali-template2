import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const runtime = 'nodejs';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default async function AppleIcon() {
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
          background: 'white',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoBase64}
          alt="Basit Ali"
          width={150}
          height={150}
          style={{ objectFit: 'contain' }}
        />
      </div>
    ),
    { ...size }
  );
}
