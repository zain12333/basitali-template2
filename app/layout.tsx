import type {Metadata} from 'next';
import localFont from 'next/font/local';
import './globals.css';

const jakarta = localFont({
  src: [
    {
      path: '../public/assets/fonts/Plus_Jakarta_Sans/PlusJakartaSans-VariableFont_wght.ttf',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/Plus_Jakarta_Sans/PlusJakartaSans-Italic-VariableFont_wght.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://basitali-template1.vercel.app'),
  title: 'Basit Ali Aluminum & Glass Work | Lahore Premier Glass & Aluminum Specialists',
  description:
    'Premium Aluminum Windows, Doors, Glass Partitions, Shower Cabins & Emergency Repair Services in Lahore. Call 0320-2740066.',
  openGraph: {
    title: 'Basit Ali Aluminum & Glass Work | Lahore',
    description:
      'Premium Aluminum Windows, Doors, Glass Partitions, Shower Cabins & Emergency Repair Services in Lahore. Call 0320-2740066.',
    url: 'https://basitali-template1.vercel.app',
    siteName: 'Basit Ali Aluminum & Glass Work',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Basit Ali Aluminum & Glass Work - Lahore',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Basit Ali Aluminum & Glass Work | Lahore',
    description: 'Premium Aluminum Windows, Doors, Glass Partitions, Shower Cabins & Emergency Repair Services in Lahore. Call 0320-2740066.',
    images: ['/twitter-image'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans antialiased bg-white text-slate-900 selection:bg-amber-500 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
