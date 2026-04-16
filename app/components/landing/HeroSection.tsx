import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="relative pt-36 pb-0 overflow-hidden flex flex-col items-center text-center bg-gradient-to-b from-[#f2faf7] to-white">
            
            <div className="px-4 relative w-full max-w-4xl mx-auto flex flex-col items-center z-10">
                
                {/* Floating Image Assets */}
                <div className="absolute hidden md:block -left-8 top-12 lg:-left-20 lg:top-8 animate-bounce" style={{ animationDuration: '3.5s' }}>
                    <Image 
                        src="/assets/icons/greenorangeicon.png" 
                        alt="Green Asset" 
                        width={70} 
                        height={70} 
                        className="w-[56px] h-[56px] md:w-[70px] md:h-[70px] object-contain"
                    />
                </div>
                
                <div className="absolute hidden md:block -right-4 bottom-24 lg:-right-16 lg:bottom-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
                    <Image 
                        src="/assets/icons/orangeheroicon.png" 
                        alt="Orange Asset" 
                        width={70} 
                        height={70} 
                        className="w-[56px] h-[56px] md:w-[70px] md:h-[70px] object-contain"
                    />
                </div>

                {/* Tag */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d1e6d9] bg-white/70 backdrop-blur-sm text-gray-700 text-sm font-medium mb-10 shadow-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-primary">
                        <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
                        <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
                        <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
                        <path d="M6 14v4M4 16h4" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    Building the future of local work in West Africa.
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-[#1f2937] tracking-tight leading-[1.15] mb-6">
                    Find <span className="text-primary">trusted people</span> to get things done <br className="hidden md:block"/>
                    & Turn everyday tasks into <span className="text-primary">income</span>
                </h1>

                {/* Subtitle */}
                <p className="text-base md:text-lg text-gray-500 max-w-2xl mb-10 leading-relaxed font-normal">
                    Earn Today is a trusted marketplace where clients can post tasks and <br className="hidden md:block"/> workers can find nearby opportunities to earn money quickly and safely.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
                    <Link href="/install" className="w-full sm:w-auto bg-primary text-white border border-primary px-8 py-3 rounded-md font-medium hover:bg-primary/95 transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-sm">
                        Get the app <span className="font-normal opacity-90">→</span>
                    </Link>
                    <Link href="#how-it-works" className="w-full sm:w-auto bg-transparent text-gray-800 border border-gray-200 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-all active:scale-[0.98]">
                        How it works
                    </Link>
                </div>
            </div>

            {/* Hero Image Phones */}
            <div className="w-full max-w-[1000px] mx-auto px-4 relative flex justify-center md:px-8 xl:px-0">
                <div className="absolute inset-0 top-[20%] w-full h-[80%] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40 -z-10 mask-image:linear-gradient(to_bottom,white,transparent)"></div>
                <Image 
                    src="/assets/images/heroPhoneshots.png" 
                    alt="EarnToday App Dashboard Previews" 
                    width={1000} 
                    height={700} 
                    className="w-full h-auto object-contain z-10"
                    priority
                />
            </div>
            
        </section>
    );
};

export default HeroSection;
