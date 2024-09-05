"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { HelpCircle, Moon, Sun } from "lucide-react";
import ModeToggle2 from "./ModeToggle2";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex-1 scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 max-h-96 lg:supports-scrollbars:pr-2 lg:max-h-96">
      <nav className="grid items-start px-1 text-sm font-medium lg:px-1">
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
                "flex gap-4 items-center p-4 text-white rounded-lg justify-between",
                { "active-gradient": isActive }
              )}
            >
              <div className="flex items-center gap-3">
              <Image
                src={link.imgUrl}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-lg font-quicksand max-lg:hidden">
                {link.label}
              </p>
              </div>
              {link.status === "inactive" && 
              <div className="main-gradient rounded-lg p-1">
                <p className="text-white font-semibold text-[10px]">Coming soon</p>
              </div>
              }
            </Link>
          );
        })}
        
      </nav>
      <div className="px-4">
            <div className="flex flex-col w-full mt-5 rounded-xl items-center justify-center bg-black-2 p-5">
              <div className="flex items-center w-full justify-between">
                <h1 className="font-semibold text-slate-50">0 / 10 Free Generation</h1>
                <HelpCircle className="text-slate-50" />
              </div>
              <div className="h-4 px-1 my-3 w-full bg-black-1 flex items-center rounded-full">
                <div className="w-[50%] h-3 my-3 main-gradient rounded-full"></div>
              </div>
              <Button type="button" className="main-gradient w-full text-slate-50 font-semibold">Upgraded to pro</Button>
            </div>
            <ModeToggle2 />
          </div>
    </div>
  );
};

export default Sidebar;
