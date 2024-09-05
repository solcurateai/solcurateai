import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-[#000000]">
        <div class="mx-auto w-full max-w-screen-xl px-4">
            <div class="p-4 py-16 sm:pb-12 md:flex md:justify-between">
                <div class="flex grow flex-col gap-4">
                    <Link class="flex items-center" href="/">
                        <Image alt="Image" width={200} height={200} src="/images/logo.png" class="w-[230px]" />
                      </Link>
                    <p class="max-w-md text-white dark:text-white">SolcurateAI - Crafted with intelligence, powered by Solana.</p>
                    <div class="flex gap-3">
                        <Link href="#"><Image alt="Image" width={24} height={24} src="/images/YouTube.svg" /></Link>
                        <Link href="#"><Image alt="Image" width={24} height={24} src="/images/Twitter.svg" /></Link>
                        <Link href="#"><Image alt="Image" width={24} height={24} src="/images/Discord.svg" /></Link>
                        <Link href="#"><Image alt="Image" width={24} height={24} src="/images/Reddit.svg" /></Link>
                        <Link href="#"><Image alt="Image" width={24} height={24} src="/images/GitHub.svg" /></Link>
                        <Link href="#"><Image alt="Image" width={24} height={24} src="/images/Telegram.svg" /></Link>
                    </div>
                    <p class="max-w-md text-white dark:text-white">Follow us on our social media channels for updates, tips, and the latest trends in AI-powered content creation</p>
                </div>
                <div class="grid grid-cols-1 gap-6 grow md:grid-cols-3 md:justify-items-end">
                    <div class="mt-4 md:mt-0">
                        <h2 class="mb-6 text-lg font-medium font-clash uppercase text-white dark:text-white">SOLCURATEAI</h2>
                        <ul class="grid gap-2">
                            <li><a class="cursor-pointer font-normal text-[#BEBCBC] duration-200 hover:text-white hover:opacity-90" href="#">Features</a></li>
                            <li><a class="cursor-pointer font-normal text-[#BEBCBC] duration-200 hover:text-white hover:opacity-90" href="#">How It Works</a></li>
                            <li><a class="cursor-pointer font-normal text-[#BEBCBC] duration-200 hover:text-white hover:opacity-90" href="#">Branding Kit</a></li>
                            <li><a class="cursor-pointer font-normal text-[#BEBCBC] duration-200 hover:text-white hover:opacity-90" href="#">Careers</a></li>
                            <li><a class="cursor-pointer font-normal text-[#BEBCBC] duration-200 hover:text-white hover:opacity-90" href="#">Disclaimer</a></li>
                            <li><a class="cursor-pointer font-normal text-[#BEBCBC] duration-200 hover:text-white hover:opacity-90" href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="mt-4 md:mt-0">
                        <h2 class="mb-6 text-lg font-medium font-clash uppercase text-white dark:text-white">CONNECT WITH US</h2>
                        <ul class="grid gap-2">
                            <li><a class="cursor-pointer font-normal text-[#BEBCBC] duration-200 hover:text-white hover:opacity-90" href="https://discord.gg/s9VJR2wXhd">Suggest a Feature</a></li>
                            <li><a class="cursor-pointer font-normal text-[#BEBCBC] duration-200 hover:text-white hover:opacity-90" href="https://twitter.com/Generated_by">Newsletter</a></li>
                            <li><a class="cursor-pointer font-normal text-[#BEBCBC] duration-200 hover:text-white hover:opacity-90" href="https://twitter.com/Generated_by">Blog</a></li>
                        </ul>
                    </div>
                    <div class="mt-4 md:mt-0">
                        <button
                            type="button"
                            id="radix-:R6irfairpf:"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            data-state="closed"
                            class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 rounded-md px-3 py-5"
                        >
                            <div class="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 513 342"
                                class="h-4 w-4"
                            >
                                <title>English</title>
                                <path fill="#FFF" d="M0 0h513v342H0z"></path>
                                <path
                                d="M0 0h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.7h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513V342H0z"
                                fill="#D80027"
                                ></path>
                                <path fill="#2E52B2" d="M0 0h256.5v184.1H0z"></path>
                                <path
                                d="m47.8 138.9-4-12.8-4.4 12.8H26.2l10.7 7.7-4 12.8 10.9-7.9 10.6 7.9-4.1-12.8 10.9-7.7zm56.3 0-4.1-12.8-4.2 12.8H82.6l10.7 7.7-4 12.8 10.7-7.9 10.8 7.9-4-12.8 10.7-7.7zm56.5 0-4.3-12.8-4 12.8h-13.5l11 7.7-4.2 12.8 10.7-7.9 11 7.9-4.2-12.8 10.7-7.7zm56.2 0-4-12.8-4.2 12.8h-13.3l10.8 7.7-4 12.8 10.7-7.9 10.8 7.9-4.3-12.8 11-7.7zM100 75.3l-4.2 12.8H82.6L93.3 96l-4 12.6 10.7-7.8 10.8 7.8-4-12.6 10.7-7.9h-13.4zm-56.2 0-4.4 12.8H26.2L36.9 96l-4 12.6 10.9-7.8 10.6 7.8L50.3 96l10.9-7.9H47.8zm112.5 0-4 12.8h-13.5l11 7.9-4.2 12.6 10.7-7.8 11 7.8-4.2-12.6 10.7-7.9h-13.2zm56.5 0-4.2 12.8h-13.3l10.8 7.9-4 12.6 10.7-7.8 10.8 7.8-4.3-12.6 11-7.9h-13.5zm-169-50.6-4.4 12.6H26.2l10.7 7.9-4 12.7L43.8 50l10.6 7.9-4.1-12.7 10.9-7.9H47.8zm56.2 0-4.2 12.6H82.6l10.7 7.9-4 12.7L100 50l10.8 7.9-4-12.7 10.7-7.9h-13.4zm56.3 0-4 12.6h-13.5l11 7.9-4.2 12.7 10.7-7.9 11 7.9-4.2-12.7 10.7-7.9h-13.2zm56.5 0-4.2 12.6h-13.3l10.8 7.9-4 12.7 10.7-7.9 10.8 7.9-4.3-12.7 11-7.9h-13.5z"
                                fill="#FFF"
                                ></path></svg><span class="ml-2">English</span>
                            </div>
                            <span class="sr-only">Languages</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="text-center py-8">
                <p class="text-sm font-semibold dark:text-gray-400 sm:text-center">© { new Date().getFullYear()} <a class="cursor-pointer" href="/">SolcurateAI</a>.
                     All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer