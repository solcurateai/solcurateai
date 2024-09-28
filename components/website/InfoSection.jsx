import Image from 'next/image'
import React from 'react'

const InfoSection = () => {
  return (
    <section className="overflow-hidden py-10 sm:py-24 lg:pb-28 lg:pt-20">
        <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 sm:mb-20 text-center md:max-w-6xl">
                <h1 className="font-bold font-clash my-5 text-5xl lg:text-[56px] main-gradient bg-clip-text">Built on Solana for Speed and Security</h1>
                <p className="font-normal text-xl">SulcurateAI is powered by Solana, one of the fastest and most secure blockchain platforms available. This ensures that your content creation process is not only quick but also secure, giving you peace of mind as you scale your social media strategy.</p>
            </div>
            <div className="flex items-center justify-center gap-6">
                <Image alt="Image" src="/images/solana.png" width={400} height={400} />
            </div>
        </div>
    </section>
  )
}

export default InfoSection