import React from 'react';
import Navbar from "@/components/website/Navbar";
import Image from 'next/image';
import Hero from '@/components/website/Hero';
import Features from '@/components/website/Features';
import InfoSection from '@/components/website/InfoSection';
import GetStartedSection from '@/components/website/GetStartedSection';
import Footer from '@/components/website/Footer';
import HowItWorks from '@/components/website/HowItWorks';


export default function Home() {
  return (
    <div className="">
      <Navbar />

      <main class="flex-1">
        <div>
          <Image src="/images/bgwave.svg" width={500} height={500} class="w-fit h-fit absolute -top-2" alt="Background Wave" />
          <Hero />
          <Features />
          <HowItWorks />
          <InfoSection />
          <GetStartedSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
