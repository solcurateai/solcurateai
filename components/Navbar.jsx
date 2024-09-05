import Image from 'next/image'
import React from 'react'
import MobileNav from './MobileNav'
import ModeToggle from './ModeToggle'
import UserMenu from './UserMenu'
import WalletMenu from './WalletMenu'
import LanguageMenu from './LanguageMenu'

const Navbar = () => {
  return (
    <header className="flex h-14 items-center justify-between gap-4 bg-black-2 border-b border-black-1 px-4 lg:h-[100px] lg:px-6"> 
      <MobileNav />
      <div className="flex items-center gap-4">
        <div className="flex items-center bg-black-3 p-4 rounded-xl gap-4">
          <Image src="/icons/coin.svg" alt="Coin" width={28} height={28} />
          <span className="text-lg font-medium text-white font-quicksand">Earning</span>
          <div className="main-gradient w-7 h-7 rounded-full font-semibold items-center flex justify-center text-white">
            <p>0</p>
          </div>
        </div>
        <ModeToggle />
        <LanguageMenu />
        <UserMenu />
        <WalletMenu />
      </div>
    </header>
  )
}

export default Navbar