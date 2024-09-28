"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { HelpCircle, Moon, Sun } from "lucide-react";
import ModeToggle2 from "./ModeToggle2";

const Sidebar = () => {
  const pathname = usePathname();
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    // Load version from localStorage to determine if user is premium
    const storedVersion = localStorage.getItem("version");
    setIsPremium(storedVersion === "premium");
  }, []);

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
                <p className="text-lg font-quicksand max-md:hidden">
                  {link.label}
                </p>
              </div>
              {link.status === "inactive" && (
                <div className="main-gradient max-lg:hidden rounded-lg p-1">
                  <p className="text-white font-semibold text-[10px]">
                    Coming soon
                  </p>
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="px-4">
        {!isPremium && (
          <div className="flex flex-col w-full mt-5 rounded-xl items-center justify-center bg-black-2 p-5">
            <Link href="/app/subscription">
              <Button
                type="button"
                className="main-gradient w-full text-slate-50 font-semibold"
              >
                Upgrade to Pro
              </Button>
            </Link>
          </div>
        )}

        <ModeToggle2 />
      </div>
    </div>
  );
};

export default Sidebar;
