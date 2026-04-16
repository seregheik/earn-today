"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                            ET
                        </div>
                        <span className="font-bold text-2xl text-gray-900 tracking-tight">EarnToday.</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#features" className="text-gray-600 hover:text-primary transition-colors font-medium">Features</Link>
                        <Link href="#solution" className="text-gray-600 hover:text-primary transition-colors font-medium">Solution</Link>
                        <Link href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors font-medium">How it works</Link>
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/signup" className="text-gray-900 font-medium hover:text-primary transition-colors">Sign up</Link>
                        <Link href="/install" className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary/90 transition-all shadow-sm hover:shadow active:scale-95">
                            Get the app <span className="ml-1 opacity-70">→</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-primary hover:text-primary/80 focus:outline-none p-2"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white fixed inset-x-0 top-20 border-b border-gray-100 shadow-xl pb-8 px-6 pt-4 flex flex-col space-y-6 transform transition-transform z-40">
                    <Link href="#features" className="text-xl font-medium text-gray-900 border-b border-gray-50 pb-4" onClick={() => setIsMobileMenuOpen(false)}>Features</Link>
                    <Link href="#solution" className="text-xl font-medium text-gray-900 border-b border-gray-50 pb-4" onClick={() => setIsMobileMenuOpen(false)}>Solution</Link>
                    <Link href="#how-it-works" className="text-xl font-medium text-gray-900 border-b border-gray-50 pb-4" onClick={() => setIsMobileMenuOpen(false)}>How it works</Link>
                    
                    <div className="pt-4 flex flex-col items-center gap-4">
                        <Link href="/signup" className="text-xl font-medium text-gray-900 w-full text-center py-3" onClick={() => setIsMobileMenuOpen(false)}>Sign up</Link>
                        <Link href="/install" className="w-full bg-primary text-white px-6 py-4 rounded-2xl font-medium text-center text-lg shadow-md flex justify-center items-center gap-2 active:scale-95 transition-all" onClick={() => setIsMobileMenuOpen(false)}>
                            Get the app <span>→</span>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
