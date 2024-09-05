import ModeToggle2 from '@/components/ModeToggle2'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Button } from '@/components/ui/button'
import { HelpCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RootLayout = ({children}) => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[340px_1fr]">
      <div className="hidden bg-black-1 md:block">
        <div className="flex overflow-auto h-full min-h-screen justify-between flex-col gap-2 custom-scrollbar">
          <div>
            <div className="flex h-14 items-center border-b px-4 lg:h-[120px] lg:px-6">
              <Link href="/" className="flex items-center justify-center w-full">
                <Image src="/images/logo.png" alt="Logo" width={200} height={200} />
              </Link>
            </div>
            <Sidebar />
          </div>
        </div>

      </div>
      <div className="flex w-full flex-col">
        <Navbar />
        <main className="flex flex-1 flex-col gap-4 p-4 bg-black-2 md:gap-8 md:p-8">
            {children}
        </main>
      </div>
    </div>
  )
}

export default RootLayout