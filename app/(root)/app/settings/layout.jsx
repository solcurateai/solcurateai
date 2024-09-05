import Navbar from '@/components/Navbar'
import SettingSidebar from '@/components/SettingSidebar'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SettingLayout = ({children}) => {
  return (
    <div className="sm:p-10 p-5 gap-5 w-[1100px] flex sm:w-full h-full bg-black-1 rounded-md overflow-hidden transition duration-30">
        {/* Setting Sidebar navigation code */}
        <div className="sm:w-1/3">
          <SettingSidebar />
        </div>
        <div className="w-2/3 flex flex-1 flex-col">
            {children}
        </div>
    </div>
  )
}

export default SettingLayout