"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'

const AppCard = ({card}) => {
  const pathname = usePathname();
  
  return (
    <div key={card.label} className="bg-black-1 p-6 rounded-2xl">
        <div className="flex items-center justify-between">
        <Image src={card.imageUrl} alt="Icon" width={100} height={100} />
        <Link href={pathname+card.route}><Button className="main-gradient text-white" type="button" >Generate</Button></Link> 
        </div>
        <div className="space-y-0 my-3">
        <h1 className="text-lg font-medium text-white font-clash">{card.title}</h1>
        <p className="text-sm text-gray-400 font-medium">{card.subtitle}</p>
        </div>
    </div>
  )
}

export default AppCard