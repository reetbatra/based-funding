'use client';

import { GitHubLogoIcon, ArrowTopRightIcon } from '@radix-ui/react-icons';
import NextLink from 'next/link';
import { NavbarLink } from '@/components/layout/header/Navbar';
import FooterIcon from './FooterIcon';

export default function Footer() {
  return (
    <footer className="flex flex-1 flex-col justify-end">
      <div className="flex flex-col justify-between gap-16 bg-boat-footer-dark-gray py-12">
        <div className="container mx-auto flex w-full flex-col justify-between gap-16 px-8 md:flex-row">
          <div className="flex flex-col justify-between">
            <div className="mt-8 flex flex-col items-center justify-center">
              <p className="text-base font-normal leading-7 text-boat-footer-light-gray">
              Made with ❤️ by Powerpuff girls for ONCHAIN SUMMER BUILDATHON
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
