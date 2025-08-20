"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "@/contexts/ThemeContext"
import { useState } from "react"

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const items = [
        { title: "Home", href: "/" },
        { title: "Blog", href: "#" },
        { title: "Single Posts", href: "#" },
        { title: "Pages Contact", href: "#" },
    ]

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <nav className="w-full flex items-center justify-between py-8">
            
                <Link href={"/"}>
                    <Image
                        src={theme === 'dark' ? "/icons/logo-dark.png" : "/icons/logo.png"}
                        width={158}
                        height={36}
                        alt="Icone Logo"
                        className="w-auto h-8 md:h-9"
                    />
                </Link>

             
                <ul className="hidden lg:flex items-center justify-between gap-10 font-work-sans text-text-1 text-lg">
                    {items.map((item) => (
                        <li key={item.title} className="cursor-pointer hover:text-text-2">
                            <Link href={item.href}>{item.title}</Link>
                        </li>
                    ))}
                </ul>

             
                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-md bg-secondary hover:bg-border transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                    <div className="relative">
                        <input
                            className="w-full py-2 pl-4 pr-8 bg-secondary text-text-input font-medium font-inter hover:outline-none focus:outline-none rounded-md"
                            placeholder="Search"
                        />
                        <Image
                            src="/icons/lupa.svg"
                            width={20}
                            height={20}
                            className="absolute top-1/2 -translate-y-1/2 right-2"
                            alt="Icone Search"
                        />
                    </div>
                </div>

               
                <div className="flex md:hidden items-center gap-2">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-md bg-secondary hover:bg-border transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                    
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-md bg-secondary hover:bg-border transition-colors"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center">
                            <span className={`block w-5 h-0.5 bg-text-1 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                            <span className={`block w-5 h-0.5 bg-text-1 mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-5 h-0.5 bg-text-1 mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </nav>

            <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <div className="bg-secondary rounded-lg p-4 mb-4">

                    <div className="relative mb-4">
                        <input
                            className="w-full py-2 pl-4 pr-8 bg-background text-text-input font-medium font-inter hover:outline-none focus:outline-none rounded-md"
                            placeholder="Search"
                        />
                        <Image
                            src="/icons/lupa.svg"
                            width={20}
                            height={20}
                            className="absolute top-1/2 -translate-y-1/2 right-2"
                            alt="Icone Search"
                        />
                    </div>
                    
                    <ul className="space-y-3">
                        {items.map((item) => (
                            <li key={item.title}>
                                <Link 
                                    href={item.href}
                                    className="block py-2 px-3 font-work-sans text-text-1 text-lg hover:text-text-2 hover:bg-background rounded-md transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}