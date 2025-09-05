"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const path = usePathname();
    // alert(isActive);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About us", href: "/about" },
        { name: "Company", href: "/life" },
        { name: "Blogs & News", href: "/blogs" },
    ];


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // alert(isScrolled);
    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">

                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link href="/">
                        <Image
                            src={isScrolled ? 'https://www.nerp.in/assets/images/logo1.png' : 'https://www.nerp.in/assets/images/logo.png'}
                            alt="Nerp Logo"
                            width={120}
                            height={40}
                            className="h-8 w-auto transition-all duration-300"
                        />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8 lg:space-x-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`relative text-base font-medium transition-colors duration-300 ${isScrolled
                                ? "text-gray-700 hover:text-fuchsia-600"
                                : "text-white hover:text-gray-200"
                                }`}
                        >
                            {link.name}
                            {/* Active underline */}
                            {path === link.href && (
                                <span
                                    className={`absolute left-0 -bottom-1 rounded-full transition-all duration-300
                                    ${path === link.href ? (isScrolled ? "h-[4px] w-full bg-fuchsia-600" : "h-[4px] w-9/12 bg-white") : ""}
                                    `}
                                />

                            )}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <Link href="/careers">
                        <button className={`py-2 px-6 rounded-full font-semibold transition-all duration-300 ${isScrolled ? 'bg-fuchsia-500 text-white hover:bg-fuchsia-600' : 'border border-white text-white hover:bg-white hover:text-fuchsia-500'}`}>
                            Join us
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className={`text-xl ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className={`flex flex-col items-center py-4 space-y-4 ${isScrolled ? 'bg-white' : 'bg-black bg-opacity-70'}`}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => { toggleMenu(); }}
                                className={`text-base font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/careers">
                            <button
                                onClick={() => { toggleMenu(); }}
                                className={`py-2 px-6 rounded-full font-semibold transition-all duration-300 ${isScrolled ? 'bg-fuchsia-500 text-white' : 'border border-white text-white'}`}>
                                Join us
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
