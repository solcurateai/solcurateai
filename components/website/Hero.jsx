import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="overflow-hidden" id="hero">
        <div className="overflow-hidden py-8 sm:pb-20 sm:pt-24">
        <div className="container mx-auto px-4 sm:px-4">
            <div className="mx-auto text-center md:px-4">
            <h1 className="mb-4 mt-16 font-heading text-[30px] font-bold leading-tight tracking-tight sm:text-[54px] md:text-[60px] lg:text-[66px]">
                <span className="text-[36px] sm:text-[66px] md:text-[72px] lg:text-[64px] font-clash">Welcome to SolcurateAI</span><br />
                <span className="bg-clip-text main-gradient font-clash">Transforming Social Media Content Creation</span>
            </h1>
            <p className="mx-auto mb-8 text-[24px] font-medium sm:max-w-2xl sm:text-[24px] lg:max-w-5xl">
                Are you ready to elevate your social media presence with AI-powered content? Curate AI is here to revolutionize the way you generate engaging and impactful content across all major platforms. Whether it's Instagram, TikTok, Facebook, Twitter, LinkedIn, or YouTube, we've got you covered.
            </p>
            <a
                className="main-gradient inline-block rounded-lg my-10 px-8 py-3 text-center font-semibold tracking-tight !text-white transition duration-200 hover:font-bold"
                href="/"
                >Join the Revolution</a>
                <div className="text-center items-center justify-center flex mt-36">
                    <Image src="/images/arrowdown.svg" width={24} height={24} alt="Arrow Down" />
                </div>
            
            </div>
        </div>
        </div>
    </section>
  )
}

export default Hero