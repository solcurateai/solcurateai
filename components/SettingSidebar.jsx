"use client"

import { settingLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { Button } from './ui/button';

const SettingSidebar = () => {
    const pathname = usePathname();

    return (
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium font-quicksand lg:px-4">
          {settingLinks.map((link) => {
            // Adjust the path to include the "/app" base path
            const fullRoute = `/app/settings${link.route}`;
  
            // Check if the current path matches the full route or starts with it (for nested routes)
            const isActive = pathname === fullRoute;
  
            return (
              <Link
                href={fullRoute}
                key={link.label}
                className={cn(
                  "flex gap-4 items-center p-4 text-white rounded-full justify-start",
                  { "border-2 border-yellow-600": isActive }
                )}
              >
                <Image
                  src={link.imgUrl}
                  alt={link.label}
                  width={24}
                  height={24}
                />
                <p className="text-lg font-quicksand max-lg:hidden">
                  {link.label}
                </p>
              </Link>
            );
          })}
          <div className="border-t border-slate-500 pt-5">
            <Button
                type="button"
                className={cn(
                    "flex gap-4 items-center p-4 text-red-400 bg-transparent rounded-lg justify-start",
                    { }
                )}
            >
                <Image
                    src="/icons/x-close.svg"
                    alt="Icon"
                    width={24}
                    height={24}
                />
                <p className="text-lg font-quicksand max-lg:hidden">
                    Delete Account
                </p>
            </Button>
          </div>
        </nav>
      </div>
    );
}

export default SettingSidebar