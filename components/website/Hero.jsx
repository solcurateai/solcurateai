import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section className="overflow-hidden z-10" id="hero">
            <div className="overflow-hidden py-8 lg:pb-20 lg:pt-24">
                <div className="container mx-auto px-4 sm:px-4">
                    <div className="mx-auto text-center md:px-4">
                        <h1 className="mb-4 mt-16 font-heading text-[40px] font-bold leading-tight tracking-tight md:text-[60px] lg:text-[66px]">
                            <span className="text-[40px] md:text-[72px] lg:text-[64px] font-clash">Welcome to SolcurateAI</span><br />
                            <span className="bg-clip-text text-[40px] md:text-[72px] lg:text-[64px] main-gradient font-clash">Transforming Social Media Content Creation</span>
                        </h1>
                        <p className="mx-auto mb-8 text-[18px] font-medium  md:text-[24px] lg:max-w-5xl">
                            Are you ready to elevate your social media presence with AI-powered content? SulcurateAI is here to revolutionize the way you generate engaging and impactful content across all major platforms. Whether it's Instagram, TikTok, Facebook, Twitter, LinkedIn, or YouTube, we've got you covered.
                        </p>
                        <Link href='/login'>
                            <button
                                className="main-gradient cursor-pointer inline-block rounded-lg my-10 px-8 py-3 text-center font-semibold tracking-tight !text-white transition duration-200 hover:font-bold"
                                href="/login"
                            >Join the Revolution</button>
                        </Link>
                        <div className="text-center items-center justify-center flex lg:mt-36">
                            <Image src="/images/arrowdown.svg" width={24} height={24} alt="Arrow Down" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero