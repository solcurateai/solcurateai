import Link from 'next/link'
import React from 'react'

const GetStartedSection = () => {
    return (
        <section className="overflow-hidden py-10 lg:pb-28 lg:pt-20">
            <div className="relative isolate px-2 pt-14 lg:px-8">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
                </div>

                <div className="lg:container mx-auto lg:px-4">
                    <div className="lg:mx-auto text-center md:max-w-6xl space-y-3 backdrop-blur-sm bg-white/10 py-10 px-10 lg:px-40 rounded-xl">
                        <h1 className="font-semibold font-clash text-[40px] main-gradient bg-clip-text">Get Started Today</h1>
                        <p className="font-normal text-md lg:text-xl">Ready to supercharge your social media strategy? Sign up for SulcurateAI and start generating high-quality content tailored to your brand’s unique voice.</p>

                        <Link href='/login'>
                            <button className="main-gradient mt-5 inline-block rounded-lg px-8 py-3 text-center font-semibold tracking-tight !text-white transition duration-200 hover:font-bold"
                            >Join the Revolution</button>
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                    <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%" }}></div>
                </div>
            </div>
        </section>
    )
}

export default GetStartedSection