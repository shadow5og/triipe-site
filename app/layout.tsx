import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Triipe',
  description:
    'Triipe: SaaS development and software consulting experts.  Building innovative solutions for businesses.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
