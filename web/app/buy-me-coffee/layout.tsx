import { generateMetadata } from '@/utils/generateMetadata';

export const metadata = generateMetadata({
  title: 'based funding',
  description:
    'fund or get funded for your education onchain only on basedfunding',
  images: 'themes.png',
  pathname: '/',
});

export default async function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
