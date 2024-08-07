'use client';

export default function Footer() {
  return (
    <footer className="flex flex-1 flex-col justify-end">
      <div className="bg-boat-footer-dark-gray flex flex-col justify-between gap-16 py-12">
        <div className="container mx-auto flex w-full flex-col justify-between gap-16 px-8 md:flex-row">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col items-center justify-center">
              <p className="text-boat-footer-light-gray text-base font-normal leading-7">
                Made with ❤️ by Powerpuff girls for ONCHAIN SUMMER BUILDATHON
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
