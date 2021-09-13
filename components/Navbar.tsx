import { Fragment } from 'react';
import Image from 'next/image';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { NavbarProps } from '../types';

export default function Navbar({ hideLogin, user }: NavbarProps) {
  return (
    <Popover as="header" className="relative border-b">
      <div className="bg-primary py-6">
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/">
                <a>
                  <span className="sr-only">RBTrades</span>
                  <div className="relative h-8 w-8 sm:h-10 sm:w-10">
                    <Image layout="fill" src="/logo.svg" alt="" />
                  </div>
                </a>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                {!hideLogin && (
                  <Popover.Button className="bg-yellow-450 rounded-md p-2 inline-flex items-center justify-center text-white hover:bg-yellow-400 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                )}
              </div>
            </div>
            <div className="hidden space-x-8 md:flex md:ml-10" />
          </div>
          {!user && !hideLogin && (
            <div className="hidden md:flex md:items-center md:space-x-6">
              <a
                href="/api/auth/login"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-yellow-450"
              >
                Log in
              </a>
            </div>
          )}
          {user && !hideLogin && (
            <div className="hidden md:flex md:items-center md:space-x-6">
              <a
                href="/api/auth/logout"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-yellow-450"
              >
                Log out
              </a>
            </div>
          )}
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {!hideLogin && (
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
          >
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div className="relative h-8 w-8">
                  <Image layout="fill" src="/logo.svg" alt="" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-yellow-450 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-450">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="mt-6 px-5">
                  <p className="text-center text-base font-medium text-yellow-450">
                    {`Existing customer? `}
                    <a
                      href="/api/auth/login"
                      className="text-yellow-450 hover:underline"
                    >
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        )}
      </Transition>
    </Popover>
  );
}
