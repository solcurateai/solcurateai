"use client"

import React from 'react';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { sidebarLinks } from '@/constants';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';


const MobileNav = () => {
    const pathname = usePathname();
  return (
    
         <Sheet>
            <SheetTrigger>
                <Button
                    variant="outline"
                    size="icon"
                    className="sm:hidden block flex"
                    >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="border-none bg-black-1">
                <Link href="/" className="flex items-center justify-start w-full">
                    <Image src="/images/logo.png" alt="Logo" width={200} height={200} />
                </Link>

                <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
                    <SheetClose asChild>
                        <section className='flex h-full flex-col pt-10 text-white'>
                        {sidebarLinks.map((link) => {
                            // Adjust the path to include the "/app" base path
                            const fullRoute = `/app${link.route}`;

                            // Check if the current path matches the full route or starts with it (for nested routes)
                            const isActive = pathname === fullRoute;

                            return (
                                <Link
                                href={fullRoute}
                                key={link.label}
                                className={cn(
                                    "flex gap-4 items-center p-4 text-white rounded-lg justify-start",
                                    { "active-gradient": isActive }
                                )}
                                >
                                <Image
                                    src={link.imgUrl}
                                    alt={link.label}
                                    width={24}
                                    height={24}
                                />
                                <p className="text-lg font-quicksand">
                                    {link.label}
                                </p>
                                </Link>
                            );
                            })}
                        </section>
                    </SheetClose>
                </div>
            </SheetContent>
          </Sheet>
  )
}

export default MobileNav