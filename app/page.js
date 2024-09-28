"use client"
import React, { useEffect } from 'react';
import Navbar from "@/components/website/Navbar";
import Image from 'next/image';
import Hero from '@/components/website/Hero';
import Features from '@/components/website/Features';
import InfoSection from '@/components/website/InfoSection';
import GetStartedSection from '@/components/website/GetStartedSection';
import Footer from '@/components/website/Footer';
import HowItWorks from '@/components/website/HowItWorks';
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const userDetails = localStorage.getItem('userDetails');
    if (userDetails) {
      // Redirect to login page if no user details are found
      router.replace('/app');
    }
  }, []);
  return (
    <div className="">
      <Navbar />

      <main className="flex-1">
        <div>
          <Image src="/images/bgwave.svg" width={500} height={500} className="w-fit h-fit absolute top-96 lg:-top-2 -z-10" alt="Background Wave" />
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
