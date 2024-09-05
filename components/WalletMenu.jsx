import React from 'react'
import { ChevronDown, LogOut, PlusCircle } from 'lucide-react'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image'
import Link from 'next/link'

const WalletMenu = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <div className="flex items-center bg-black-3 p-4 rounded-xl gap-4">
                <Image src="/icons/avatar1.svg" alt="Coin" width={28} height={28} />
                <span className="text-lg font-medium text-white font-quicksand truncate">Eij...92KA</span>
                <ChevronDown />
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <div className="bg-black-5 flex flex-col gap-3 p-2">
            <div className="flex items-center bg-black-3 p-4 rounded-xl gap-4">
                <Image src="/icons/avatar1.svg" alt="Coin" width={28} height={28} />
                <span className="text-lg font-medium text-white font-quicksand">Eij...92KA</span>
            </div>
            <Link href="/create-org" className="flex justify-start items-center p-4 rounded-xl gap-4">
              <PlusCircle />
              <span className="text-lg font-medium text-gray-200 font-quicksand">Add new wallet</span>
            </Link>
            <Button type="button" className="flex justify-start items-center text-red-600 p-4 rounded-xl gap-4">
              <LogOut />
              <span className="text-lg font-medium font-quicksand">Sign Out</span>
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
  )
}

export default WalletMenu