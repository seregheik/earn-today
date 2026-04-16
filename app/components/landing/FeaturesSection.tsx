import React from 'react';
import Link from 'next/link';
import { Briefcase, Users } from 'lucide-react';

const FeaturesSection = () => {
    return (
        <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-20">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                    Built for people who want to <span className="text-primary">get things done</span> and those <span className="text-primary">ready to earn</span> by doing them.
                </h2>
                <p className="mt-6 text-gray-600 md:text-lg max-w-2xl mx-auto font-medium">
                    A simple and secure platform matching those looking for local hands with local hands needing to earn money locally, simply and safely.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                {/* Card 1 */}
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                    <div className="w-full h-64 md:h-80 bg-gray-100 rounded-2xl mb-10 overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
                        {/* Placeholder for the worker image */}
                        <div className="absolute inset-0 bg-neutral-200"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                            [Image: Worker with drill]
                        </div>
                    </div>
                    <div>
                        <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 border border-green-100">
                            <Briefcase className="text-primary" size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Find flexible work and start earning today.</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Take on easy jobs where you set your schedule, choose your rates, and get paid quickly. Whether it&apos;s home repair, running errands, or more, you&apos;ll be able to quickly turn extra time into extra income.
                        </p>
                        <Link href="/tasks" className="text-primary font-semibold flex items-center gap-2 hover:gap-4 transition-all w-max py-2">
                            Find tasks <span className="text-xl">→</span>
                        </Link>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 md:mt-24 group">
                    <div className="w-full h-64 md:h-80 bg-gray-100 rounded-2xl mb-10 overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
                        {/* Placeholder for the people looking at phone image */}
                        <div className="absolute inset-0 bg-neutral-200"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                            [Image: Group looking at phone]
                        </div>
                    </div>
                    <div>
                        <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 border border-green-100">
                            <Users className="text-primary" size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Find trusted people to help with your tasks.</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Save time and energy by connecting with local taskers ready to get your jobs done effectively. Review profiles, read regular reviews and book help without stress.
                        </p>
                        <Link href="/help" className="text-primary font-semibold flex items-center gap-2 hover:gap-4 transition-all w-max py-2">
                            Get help <span className="text-xl">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
