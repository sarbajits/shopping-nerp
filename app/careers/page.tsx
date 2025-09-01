"use client"

import { useState } from 'react';
import Head from 'next/head';

export default function JoinUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        position: '',
        coverLetter: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thank you for your application! We will get back to you soon.');
    };

    return (
        <>
            <Head>
                <title>Join Us - Nerp</title>
                <meta name="description" content="Join the Nerp team and help us build the future" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-100 font-['Poppins']">
                {/* Hero Section */}
                <section className="pt-20 px-4 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            Join the <span className="text-blue-600">Nerp</span> Team
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                            We're building the future of technology. Come help us create solutions that make a difference.
                        </p>
                        <button
                            onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Apply Now
                        </button>
                    </div>
                </section>

                {/* Application Form Section */}
                <section id="application-form" className="py-4 px-4">
                    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Apply Now</h2>
                        <p className="text-gray-600 mb-8">We're excited to hear from you! Please fill out the form below.</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="outline-none text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="outline-none text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="position" className="block text-gray-700 font-medium mb-2">Position</label>
                                <input
                                    type="text"
                                    id="position"
                                    name="position"
                                    value={formData.position}
                                    onChange={handleChange}
                                    required
                                    className="outline-none text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Desired position"
                                />
                            </div>

                            <div>
                                <label htmlFor="coverLetter" className="block text-gray-700 font-medium mb-2">Cover Letter</label>
                                <textarea
                                    id="coverLetter"
                                    name="coverLetter"
                                    value={formData.coverLetter}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="outline-none text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Tell us why you'd like to join our team and what you can bring..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                Submit Application
                            </button>
                        </form>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16 px-4 bg-white">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Join Nerp?</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center p-6 rounded-xl bg-gradient-to-b from-blue-200 to-blue-50 hover:shadow-md transition-all">
                                <div className="w-16 h-16 mx-auto mb-4 bg-blue-200 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-blue-400 text-xl font-semibold mb-2">Impactful Work</h3>
                                <p className="text-gray-600">Solve real problems and create products that people love to use.</p>
                            </div>

                            <div className="text-center p-6 rounded-xl bg-gradient-to-b from-blue-200 to-blue-50 hover:shadow-md transition-all">
                                <div className="w-16 h-16 mx-auto mb-4 bg-blue-200 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-blue-400 text-xl font-semibold mb-2">Great Team</h3>
                                <p className="text-gray-600">Work with talented, passionate people who support your growth.</p>
                            </div>

                            <div className="text-center p-6 rounded-xl bg-gradient-to-b from-blue-200 to-blue-50 hover:shadow-md transition-all">
                                <div className="w-16 h-16 mx-auto mb-4 bg-blue-200 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-blue-400 text-xl font-semibold mb-2">Perks & Benefits</h3>
                                <p className="text-gray-600">Competitive compensation, flexible hours, and comprehensive benefits.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}