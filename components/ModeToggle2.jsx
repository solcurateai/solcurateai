"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
export default function ModeToggle2() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex w-full my-4 rounded-xl items-center justify-center bg-black-2 p-1">
        <Button onClick={() => setTheme("light")} variant="outline" size="icon" className={`flex rounded-xl h-[48px] w-full ${theme === 'dark' && 'bg-black-2'} gap-4`}>
            <Sun className="h-[1.2rem] w-[1.2rem]" />
            <p className="font-semibold">Light</p>
        </Button>
        <Button onClick={() => setTheme("dark")} variant="outline" size="icon" className={`flex rounded-xl h-[48px] w-full ${theme === 'light' && 'bg-black-2'} gap-4`}>
            <Moon className="h-[1.2rem] w-[1.2rem]" />
            <p className="font-semibold">Dark</p>
        </Button>
    </div>
  )
}
