import React from 'react';
import { MapPin, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

const WhyChooseSection = () => {
    return (
        <section id="solution" className="bg-[#0b2416] py-32 px-4 sm:px-6 lg:px-8 text-white rounded-[3rem] shadow-2xl mx-2 sm:mx-6 lg:mx-8 my-12">
            <div className="max-w-7xl mx-auto text-center mb-20">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-8 backdrop-blur-sm border border-white/10">
                    <ShieldCheck size={18} className="text-green-400 mr-2" />
                    Premium Value
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                    Why Choose <span className="text-primary">EarnToday?</span>
                </h2>
                <p className="mt-6 text-[#9ca3af] text-lg md:text-xl max-w-2xl mx-auto font-medium">
                    The smart and simple way to share resources, earn extra money and get more done together format.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mt-12">
                {/* Left - Image placeholder */}
                <div className="relative group">
                    <div className="w-full h-[500px] lg:h-[600px] bg-neutral-900 rounded-[2.5rem] border border-white/5 overflow-hidden flex items-center justify-center relative shadow-2xl group-hover:border-primary/30 transition-colors duration-500">
                        {/* Placeholder for Warehouse Workers Image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                        <span className="text-neutral-500 z-20 text-sm font-medium tracking-widest uppercase">
                            [Image: Warehouse Workers]
                        </span>
                    </div>
                </div>

                {/* Right - Features Grid */}
                <div className="grid sm:grid-cols-2 gap-10 md:gap-y-16 md:gap-x-12">
                    <div className="flex flex-col">
                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/5 shadow-inner">
                            <Zap className="text-primary" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 tracking-tight">Flexible Work</h3>
                        <p className="text-neutral-400 leading-relaxed font-medium">
                            Take on tasks whenever you want. Set your own schedule and enjoy complete freedom over how you work.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/5 shadow-inner">
                            <ShieldCheck className="text-primary" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 tracking-tight">Verified Users</h3>
                        <p className="text-neutral-400 leading-relaxed font-medium">
                            All users are thoroughly checked. Have peace of mind knowing you are dealing with genuine people.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/5 shadow-inner">
                            <MapPin className="text-primary" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 tracking-tight">Local Community</h3>
                        <p className="text-neutral-400 leading-relaxed font-medium">
                            Connect with locals around you. Find tasks nearby or hire neighbors in your local area easily.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/5 shadow-inner">
                            <HeartHandshake className="text-primary" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 tracking-tight">Instant Payments</h3>
                        <p className="text-neutral-400 leading-relaxed font-medium">
                            Quick and secure payout straight to your bank account as soon as the task gets completed.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
