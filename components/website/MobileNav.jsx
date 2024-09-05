"use client"

import React from 'react';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { websiteLinks } from '@/constants';
import ModeToggle from '../ModeToggle';


const MobileNav = () => {
    const pathname = usePathname();
  return (
    <section className='w-full max-w-[264px]'>
         <Sheet>
            <SheetTrigger>
                <svg
                    class="navbar-burger pt-2 text-white"
                    fill="none"
                    height="60"
                    viewBox="0 0 70 70"
                    width="60"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                    fill="currentColor"
                    height="56"
                    rx="30"
                    width="56"
                    ></rect>
                    <path d="M37 32H19M37 24H19" stroke="black"></path>
                </svg>
            </SheetTrigger>
            <SheetContent side="left" className="border-none bg-dark-1">
                <Link href="/" className='flex items-center gap-1'>
                    <Image 
                        src="/images/logo.png"
                        width={200}
                        height={200}
                        alt="Yoom logo"
                        className="max-sm:size-10"
                    />
                </Link>

                <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
                    <SheetClose asChild>
                        <section className='flex w-full flex-col justify-center py-16'>
                            {websiteLinks.map((link) => {
                                const isActive = pathname === link.route;
                                return (
                                    <SheetClose asChild key={link.route}>
                                        <Link
                                            href={link.route}
                                            key={link.label}
                                            className="mb-12 font-medium tracking-tight hover:text-accent-foreground"
                                        >
                                            <p className='font-semibold'>
                                                {link.label}
                                            </p>
                                        </Link>
                                    </SheetClose>
                                )
                            })}

                            <div className="flex w-full flex-col justify-end gap-2">
                                <ModeToggle />
                                <button
                                type="button"
                                id="radix-:R6irfairpf:"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                data-state="closed"
                                className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 rounded-md px-3 py-5"
                                >
                                <div className="flex items-center">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 513 342"
                                    className="h-4 w-4"
                                    >
                                    <title>English</title>
                                    <path fill="#FFF" d="M0 0h513v342H0z"></path>
                                    <path
                                        d="M0 0h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.7h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513V342H0z"
                                        fill="#D80027"
                                    ></path>
                                    <path fill="#2E52B2" d="M0 0h256.5v184.1H0z"></path>
                                    <path
                                        d="m47.8 138.9-4-12.8-4.4 12.8H26.2l10.7 7.7-4 12.8 10.9-7.9 10.6 7.9-4.1-12.8 10.9-7.7zm56.3 0-4.1-12.8-4.2 12.8H82.6l10.7 7.7-4 12.8 10.7-7.9 10.8 7.9-4-12.8 10.7-7.7zm56.5 0-4.3-12.8-4 12.8h-13.5l11 7.7-4.2 12.8 10.7-7.9 11 7.9-4.2-12.8 10.7-7.7zm56.2 0-4-12.8-4.2 12.8h-13.3l10.8 7.7-4 12.8 10.7-7.9 10.8 7.9-4.3-12.8 11-7.7zM100 75.3l-4.2 12.8H82.6L93.3 96l-4 12.6 10.7-7.8 10.8 7.8-4-12.6 10.7-7.9h-13.4zm-56.2 0-4.4 12.8H26.2L36.9 96l-4 12.6 10.9-7.8 10.6 7.8L50.3 96l10.9-7.9H47.8zm112.5 0-4 12.8h-13.5l11 7.9-4.2 12.6 10.7-7.8 11 7.8-4.2-12.6 10.7-7.9h-13.2zm56.5 0-4.2 12.8h-13.3l10.8 7.9-4 12.6 10.7-7.8 10.8 7.8-4.3-12.6 11-7.9h-13.5zm-169-50.6-4.4 12.6H26.2l10.7 7.9-4 12.7L43.8 50l10.6 7.9-4.1-12.7 10.9-7.9H47.8zm56.2 0-4.2 12.6H82.6l10.7 7.9-4 12.7L100 50l10.8 7.9-4-12.7 10.7-7.9h-13.4zm56.3 0-4 12.6h-13.5l11 7.9-4.2 12.7 10.7-7.9 11 7.9-4.2-12.7 10.7-7.9h-13.2zm56.5 0-4.2 12.6h-13.3l10.8 7.9-4 12.7 10.7-7.9 10.8 7.9-4.3-12.7 11-7.9h-13.5z"
                                        fill="#FFF"
                                    ></path></svg><span className="ml-2">English</span>
                                </div>
                                <span className="sr-only">Languages</span>
                                </button>

                                <Link href="/login" className="main-gradient inline-block rounded-lg px-8 py-3 text-center font-semibold tracking-tight !text-white transition duration-200 hover:font-bold bg-gradient-to-tr from-yellow-400 to-orange-600">Login</Link>
                                
                            </div>
                        </section>
                    </SheetClose>
                </div>
            </SheetContent>
          </Sheet>
    </section>
  )
}

export default MobileNav