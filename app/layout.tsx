import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Geist } from 'next/font/google';
import type { Metadata } from 'next';
import { appName } from '@/lib/shared';

const geist = Geist({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${appName}`,
    default: appName,
  },
  description:
    'Panduan lengkap, praktis, dan terstruktur seputar kehidupan perkuliahan di Institut Teknologi Kalimantan (ITK).',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://tutorial-berkuliah.vercel.app'
  ),
  openGraph: {
    title: {
      template: `%s | ${appName}`,
      default: appName,
    },
    description:
      'Panduan lengkap, praktis, dan terstruktur seputar kehidupan perkuliahan di Institut Teknologi Kalimantan (ITK).',
    siteName: appName,
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: `%s | ${appName}`,
      default: appName,
    },
    description:
      'Panduan lengkap, praktis, dan terstruktur seputar kehidupan perkuliahan di Institut Teknologi Kalimantan (ITK).',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="id" className={geist.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
