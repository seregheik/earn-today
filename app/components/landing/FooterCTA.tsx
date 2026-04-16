import React from 'react';
import Link from 'next/link';

const FooterCTA = () => {
    return (
        <footer className="bg-gradient-to-b from-primary to-[#065b3d] text-white pt-28 pb-10 px-4 sm:px-6 lg:px-8 mt-32">
            <div className="max-w-4xl mx-auto text-center mb-28">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8">
                    Ready to get started today?
                </h2>
                <p className="text-green-100 text-lg md:text-xl md:leading-relaxed mb-12 font-medium max-w-2xl mx-auto">
                    Join EarnToday and start finding help or making money locally. It takes just minutes to sign up.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button className="bg-gray-900 text-white px-8 py-4 rounded-[1.25rem] font-medium flex items-center justify-center gap-4 hover:bg-black transition-all shadow-xl hover:shadow-2xl border border-gray-800 hover:-translate-y-1">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.79 3.59-.79 2.59 0 4.19 1.48 4.67 1.84-2.14 1.25-2.64 3.8-1 5.34.8 1.03 1.94 1.54 2.87 1.84-1.2 3.19-3.26 6.01-5.21 3.94m-6.26-14.73c.7-2.15 2.5-3.66 4.34-3.55.22 2.24-1.12 4.15-2.91 5.08-.85.45-1.93.58-2.69.57-.42-2.33 1.09-4.32 1.26-2.12z"></path></svg>
                        <div className="text-left">
                            <div className="text-[0.65rem] uppercase tracking-wider text-gray-400 font-semibold mb-0.5">Download on the</div>
                            <div className="text-xl font-bold leading-tight">App Store</div>
                        </div>
                    </button>
                    <button className="bg-gray-900 text-white px-8 py-4 rounded-[1.25rem] font-medium flex items-center justify-center gap-4 hover:bg-black transition-all shadow-xl hover:shadow-2xl border border-gray-800 hover:-translate-y-1">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M19.04 11.23l-12.8-7.39a1.07 1.07 0 0 0-1.57.88v14.56a1.07 1.07 0 0 0 1.57.88l12.8-7.39c.64-.37.64-1.17 0-1.54z"></path></svg>
                        <div className="text-left">
                            <div className="text-[0.65rem] uppercase tracking-wider text-gray-400 font-semibold mb-0.5">GET IT ON</div>
                            <div className="text-xl font-bold leading-tight">Google Play</div>
                        </div>
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-t border-white/20 pt-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-2xl font-bold flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary font-bold text-lg shadow-sm">
                        ET
                    </div>
                    EarnToday.
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-green-50 text-sm font-semibold">
                    <Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link>
                    <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
                    <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms of Conditions</Link>
                </div>
                <div className="text-green-200/80 text-sm font-medium">
                    © {new Date().getFullYear()} EarnToday.
                </div>
            </div>
        </footer>
    );
};

export default FooterCTA;
