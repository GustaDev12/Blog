"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "@/contexts/ThemeContext"
export default function Footer() {
    const { theme } = useTheme();
    
    return (
        <footer className="w-full bg-footer">
            <div className="flex flex-col mt-[60px] md:mt-[80px] lg:mt-[100px] gap-8 md:gap-12 lg:gap-16 py-8 md:py-12 lg:py-16 mx-auto max-w-[1218px] px-4 md:px-6 lg:px-8">
                <div className="w-full flex flex-col md:flex-row md:justify-between gap-8 md:gap-6 lg:gap-8">
                    <div className="flex-1 md:max-w-[280px]">
                        <h1 className="text-text-2 font-inter font-bold text-lg md:text-base">About</h1>
                        <h2 className="text-text-4 mt-3 font-inter text-sm md:text-base leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </h2>
                        <div className="mt-4 md:mt-6 space-y-1">
                            <h1 className="text-text-2 font-inter font-bold text-sm md:text-base">Email: <span className="font-work-sans font-normal">gustavozinho7@gmail.com</span></h1>
                            <h1 className="text-text-2 font-inter font-bold text-sm md:text-base">Phone : <span className="font-work-sans font-normal">(83) 99444-9973</span></h1>
                            <h1 className="text-text-2 font-inter font-bold text-sm md:text-base">GitHub : <span className="font-work-sans font-normal">GustaDev12</span></h1>
                        </div>
                    </div>
                    
                    <div className="flex flex-row md:flex-row gap-8 md:gap-12 lg:gap-16">
                        <div>
                            <h1 className="text-text-2 font-inter font-bold text-lg md:text-base">Quick Link</h1>
                            <ul className="mt-2 space-y-0.5 text-text-1">
                                <li className="font-work-sans font-normal text-sm md:text-base">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="font-work-sans font-normal text-sm md:text-base">
                                    <Link href="/">About</Link>
                                </li>
                                <li className="font-work-sans font-normal text-sm md:text-base">
                                    <Link href="/">Blog</Link>
                                </li>
                                <li className="font-work-sans font-normal text-sm md:text-base">
                                    <Link href="/">Archived</Link>
                                </li>
                                <li className="font-work-sans font-normal text-sm md:text-base">
                                    <Link href="/">Author</Link>
                                </li>
                                <li className="font-work-sans font-normal text-sm md:text-base">
                                    <Link href="/">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-text-2 font-inter font-bold text-lg md:text-base">Categories</h1>
                            <ul className="mt-2 space-y-0.5 text-text-1">
                                <li className="font-work-sans font-normal text-sm md:text-base">
                                    <Link href="/">Lifestyle</Link>
                                </li>
                                <li className="font-work-sans font-normal text-sm md:text-base">
                                    <Link href="/">Technology</Link>
                                </li>
                                <li className="font-work-sans font-normal text-sm md:text-base">
                                    <Link href="/">Travel</Link>
                                </li>
                                <li className="font-work-sans font-normal text-sm md:text-base">
                                    <Link href="/">Business</Link>
                                </li>
                                <li className="font-work-sans font-normal text-sm md:text-base">
                                    <Link href="/">Economy</Link>
                                </li>
                                <li className="font-work-sans font-normal text-sm md:text-base">
                                    <Link href="/">Sports</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full border-1 border-border"></div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                    <Link href={"/"} className="order-2 md:order-1">
                        <Image
                            src={theme === 'dark' ? "/icons/logo-dark.png" : "/icons/logo.png"}
                            width={120}
                            height={28}
                            alt="Icone Logo"
                            className="md:w-[158px] md:h-[36px]"
                        />
                    </Link>
                    
                    <div className="order-1 md:order-2 w-full md:w-auto overflow-x-auto">
                        <ul className="flex items-center space-x-4 md:space-x-5 text-text-1 min-w-max md:min-w-0 px-2 md:px-0">
                            <li className="font-work-sans font-normal text-sm md:text-base whitespace-nowrap">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="font-work-sans font-normal text-sm md:text-base whitespace-nowrap">
                                <Link href="/">About</Link>
                            </li>
                            <li className="font-work-sans font-normal text-sm md:text-base whitespace-nowrap">
                                <Link href="/">Blog</Link>
                            </li>
                            <li className="font-work-sans font-normal text-sm md:text-base whitespace-nowrap">
                                <Link href="/">Archived</Link>
                            </li>
                            <li className="font-work-sans font-normal text-sm md:text-base whitespace-nowrap">
                                <Link href="/">Author</Link>
                            </li>
                            <li className="font-work-sans font-normal text-sm md:text-base whitespace-nowrap">
                                <Link href="/">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}