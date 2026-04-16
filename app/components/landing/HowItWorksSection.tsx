"use client";
import React, { useState } from 'react';
import { DownloadCloud, FileCheck, CheckCircle } from 'lucide-react';

const HowItWorksSection = () => {
    const [activeTab, setActiveTab] = useState<'find' | 'offer'>('find');

    return (
        <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50/50 rounded-[3rem] my-16 border border-slate-100">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center px-5 py-2 rounded-full border border-green-200 bg-white text-primary text-sm font-bold tracking-wide uppercase mb-6 shadow-sm">
                    How it works
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                    Get tasks done or start earning in just a <span className="text-primary">few simple steps.</span>
                </h2>
                <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto font-medium">
                    No complicated processes. Just a straightforward way to connect and get things moving.
                </p>
            </div>

            {/* Toggle Tabs */}
            <div className="flex justify-center mb-20">
                <div className="bg-white p-1.5 rounded-full border border-gray-200 inline-flex shadow-sm relative">
                    <button
                        onClick={() => setActiveTab('find')}
                        className={`px-10 py-3.5 rounded-full text-base font-bold transition-all z-10 ${
                            activeTab === 'find' ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:text-gray-900'
                        }`}
                    >
                        Find Jobs
                    </button>
                    <button
                        onClick={() => setActiveTab('offer')}
                        className={`px-10 py-3.5 rounded-full text-base font-bold transition-all z-10 ${
                            activeTab === 'offer' ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:text-gray-900'
                        }`}
                    >
                        Offer Help
                    </button>
                </div>
            </div>

            {/* Steps Grid */}
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
                {/* Step 1 */}
                <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                    <div className="w-full h-52 bg-slate-50 rounded-3xl mb-8 flex items-center justify-center relative border border-slate-100 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <DownloadCloud size={64} className="text-gray-300 group-hover:text-primary/50 transition-colors" />
                        <div className="absolute top-4 left-4 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md group-hover:bg-primary transition-colors">
                            1
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Download the App</h3>
                    <p className="text-gray-500 leading-relaxed font-medium">
                        Get started by downloading the EarnToday app from the App Store or Google Play.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                    <div className="w-full h-52 bg-slate-50 rounded-3xl mb-8 flex items-center justify-center relative border border-slate-100 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <FileCheck size={64} className="text-gray-300 group-hover:text-primary/50 transition-colors" />
                        <div className="absolute top-4 left-4 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md group-hover:bg-primary transition-colors">
                            2
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Secure Your Tasks</h3>
                    <p className="text-gray-500 leading-relaxed font-medium">
                        {activeTab === 'find' ? 'Create a profile, browse available tasks in your area, and request to do them.' : 'Post your task details, review trusted applicants, and assign the job securely.'}
                    </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                    <div className="w-full h-52 bg-slate-50 rounded-3xl mb-8 flex items-center justify-center relative border border-slate-100 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <CheckCircle size={64} className="text-gray-300 group-hover:text-primary/50 transition-colors" />
                        <div className="absolute top-4 left-4 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md group-hover:bg-primary transition-colors">
                            3
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Complete & Earn</h3>
                    <p className="text-gray-500 leading-relaxed font-medium">
                        {activeTab === 'find' ? 'Finish the task successfully and get paid directly to your wallet instantly.' : 'Confirm task completion and release payment to the tasker securely.'}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
