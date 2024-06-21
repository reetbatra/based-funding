import { ChevronDownIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { clsx } from 'clsx';
import NextLink from 'next/link';
import AccountConnect from './AccountConnect';
import { Experiences } from './Experiences';
import Button from '@/components/Button/Button';

export function NavbarLink({
  href,
  children,
  target,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
  ariaLabel?: string;
}) {
  return (
    <NextLink
      href={href}
      className="font-robotoMono px-0 text-center text-base font-normal text-white no-underline"
      target={target}
      aria-label={ariaLabel}
    >
      {children}
    </NextLink>
  );
}

export function NavbarTitle() {
  return (
    <div className="flex h-8 items-center justify-start gap-4">
      <NextLink href="/" passHref className="relative h-8 w-8" aria-label="Home page">
        <div className="absolute size-8 rounded-full bg-white" />
      </NextLink>
      <NextLink
        href="/"
        passHref
        className="text-center text-xl font-medium no-underline"
        aria-label=""
      >
        basefunding
      </NextLink>
    </div>
  );
}

function Navbar() {
  return (
    <nav
      className={clsx(
        'flex flex-1 flex-grow items-center justify-between',
        'rounded-[50px] bg-white bg-opacity-10 p-4 backdrop-blur-2xl',
      )}
    >
      <div className="flex h-8 grow items-center justify-between gap-4">
        <NavbarTitle />
        <div className="flex items-center justify-start gap-8 bg-blue-500 p-4 rounded-3xl">
          <AccountConnect />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
