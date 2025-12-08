"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="font-bold text-2xl text-secondary flex items-center gap-1">
                    <span>Tech</span><span className="text-primary">Stacks</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink href="/">Home</NavLink>
                    <div className="relative group">
                        <button className="text-sm font-medium text-text hover:text-primary transition py-1 flex items-center gap-1">
                            Categories
                        </button>
                        <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-100 shadow-lg rounded-lg hidden group-hover:block pt-2">
                            <div className="flex flex-col py-1">
                                <Link href="/category/crm" className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary">CRM Software</Link>
                                <Link href="/category/email-marketing" className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary">Email Marketing</Link>
                                <Link href="/category/website-builders" className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary">Website Builders</Link>
                            </div>
                        </div>
                    </div>
                    <NavLink href="/about">About Us</NavLink>
                    <NavLink href="/support">Help</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-700 hover:text-primary focus:outline-none p-2"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
                        <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
                        <div className="py-2 border-t border-b border-gray-50 my-2">
                            <span className="block px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Categories</span>
                            <MobileNavLink href="/category/crm" onClick={() => setIsMenuOpen(false)}>CRM Software</MobileNavLink>
                            <MobileNavLink href="/category/email-marketing" onClick={() => setIsMenuOpen(false)}>Email Marketing</MobileNavLink>
                            <MobileNavLink href="/category/website-builders" onClick={() => setIsMenuOpen(false)}>Website Builders</MobileNavLink>
                        </div>
                        <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>About Us</MobileNavLink>
                        <MobileNavLink href="/support" onClick={() => setIsMenuOpen(false)}>Help</MobileNavLink>
                        <MobileNavLink href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
                    </div>
                </div>
            )}
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-sm font-medium text-text hover:text-primary transition border-b-2 border-transparent hover:border-primary py-1"
        >
            {children}
        </Link>
    );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50 transition"
        >
            {children}
        </Link>
    );
}
