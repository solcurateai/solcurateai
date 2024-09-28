import Image from 'next/image'
import React from 'react'

const HowItWorks = () => {
  return (
    <section id="howitworks" className="overflow-hidden py-16 lg:py-24">
        <div className="container mx-auto px-10">
            <div className="-m-8 flex flex-wrap items-center lg:items-center">
                <div className="w-full p-4 sm:p-8 md:w-1/2">
                    <div className="md:w-full">
                        <h1 className="font-bold font-clash my-5 text-5xl lg:text-[56px] main-gradient bg-clip-text">How It Works</h1>
                        <div className="-m-6 flex flex-wrap">
                            <div className="w-full pl-6 pt-6">
                                <p>Step 1</p>
                                <h3 className="mb-2 font-heading font-clash text-2xl mt-2 !font-bold tracking-tight">Input Your Preferences</h3>
                                <p className="tracking-tight text-lg">Tell SulcurateAI what you need—choose your platform, set your tone, and define your goals. Whether it’s driving engagement, promoting a product, or building your brand’s story, we’ve got it covered.</p>
                            </div>
                            <div className="w-full pl-6 pt-6">
                                <p>Step 2</p>
                                <h3 className="mb-2 font-heading font-clash text-2xl mt-2 !font-bold tracking-tight">Generate Content</h3>
                                <p className="tracking-tight text-lg">Our AI gets to work, analyzing millions of data points, trends, and user behavior to craft content that’s not just relevant but also compelling and on-brand.</p>
                            </div>
                            <div className="w-full pl-6 pt-6">
                                <p>Step 3</p>
                                <h3 className="mb-2 font-heading font-clash text-2xl mt-2 !font-bold tracking-tight">Customize & Post</h3>
                                <p className="tracking-tight text-lg">Review and tweak the generated content to your liking. Once you're satisfied, you're just a click away from sharing it with your audience.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="mx-auto max-w-max"><Image alt="Image" loading="lazy" decoding="async" data-nimg="1" width={500} height={500} className="rounded-[5px] transition duration-500 hover:-translate-y-2" 
                            src="/images/howitworks.jpg" /></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HowItWorks