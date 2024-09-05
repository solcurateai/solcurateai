import Image from 'next/image'
import React from 'react'

const InfoSection = () => {
  return (
    <section class="overflow-hidden py-10 sm:py-24 lg:pb-28 lg:pt-20">
        <div class="container mx-auto px-4">
            <div class="mx-auto mb-16 sm:mb-20 sm:text-center md:max-w-6xl">
                <h1 class="font-bold font-clash my-5 text-[56px] main-gradient bg-clip-text">Built on Solana for Speed and Security</h1>
                <p class="font-normal text-xl">Curate AI is powered by Solana, one of the fastest and most secure blockchain platforms available. This ensures that your content creation process is not only quick but also secure, giving you peace of mind as you scale your social media strategy.</p>
            </div>
            <div class="flex items-center justify-center gap-6">
                <Image alt="Image" src="/images/solana.png" width={400} height={400} />
            </div>
        </div>
    </section>
  )
}

export default InfoSection