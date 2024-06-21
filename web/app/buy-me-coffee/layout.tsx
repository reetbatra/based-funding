import { generateMetadata } from '@/utils/generateMetadata';

export const metadata = generateMetadata({
  title: 'based funding',
  description:
    'based funding by powerpuff girls',
  images: 'themes.png',
  pathname: 'buy-me-coffee',
});

export default async function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
