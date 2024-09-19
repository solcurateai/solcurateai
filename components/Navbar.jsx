import Image from 'next/image'
import React from 'react'
import MobileNav from './MobileNav'
import ModeToggle from './ModeToggle'
import UserMenu from './UserMenu'
import WalletMenu from './WalletMenu'
import LanguageMenu from './LanguageMenu'
import EarningBox from './EarningBox'


const Navbar = () => {
  return (
    <header className="flex h-[100px] items-center justify-between gap-4 bg-black-2 border-b border-black-1 px-4 lg:px-6"> 
      <MobileNav />
      <div className="flex items-center gap-2 lg:gap-4">
        
        <EarningBox count={12} />
        <ModeToggle />
        <LanguageMenu />
        <UserMenu />
        <WalletMenu />
      </div>
    </header>
  )
}

export default Navbar