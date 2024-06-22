import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AccountConnect from './AccountConnect';

export function NavbarTitle() {
  return (
    <div className="flex items-center gap-2">
      <Link href="/" passHref className="mb-1 text-3xl no-underline" aria-label="Home page">
        🤝
      </Link>
      <Link
        href="/"
        passHref
        className="text-mainColor text-center text-3xl font-extrabold no-underline"
      >
        basedfunding
      </Link>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <NavbarTitle />
      <Button variant="black" className="w-250 text-lg">
        <AccountConnect />
      </Button>
    </nav>
  );
}

export default Navbar;
