import { Roboto_Mono, Inter, Lato } from 'next/font/google';

export const roboto = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});
