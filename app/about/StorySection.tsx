"use client"
import { useState } from 'react';

const StorySection = () => {
    const [activeTab, setActiveTab] = useState('mission');

    return (
        <section className="py-4">
            <div className="container mx-auto px-4">
                <div className="text-center mb-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Founded in 2018, Nerp.in started as a small team with big dreams. Today, we're a leading digital solutions provider helping businesses transform their ideas into reality.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="flex border-b mb-8">
                        <button
                            className={`py-3 px-6 font-medium ${activeTab === 'mission' ? 'text-fuchsia-600 border-b-2 border-fuchsia-600' : 'text-gray-500'}`}
                            onClick={() => setActiveTab('mission')}
                        >
                            Our Mission
                        </button>
                        <button
                            className={`py-3 px-6 font-medium ${activeTab === 'vision' ? 'text-fuchsia-600 border-b-2 border-fuchsia-600' : 'text-gray-500'}`}
                            onClick={() => setActiveTab('vision')}
                        >
                            Our Vision
                        </button>
                        <button
                            className={`py-3 px-6 font-medium ${activeTab === 'values' ? 'text-fuchsia-600 border-b-2 border-fuchsia-600' : 'text-gray-500'}`}
                            onClick={() => setActiveTab('values')}
                        >
                            Our Values
                        </button>
                    </div>

                    <div className="transition-all duration-300">
                        {activeTab === 'mission' && (
                            <div className="p-6 bg-fuchsia-100 rounded-lg">
                                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Empowering Businesses Through Technology</h3>
                                <p className="text-gray-700">
                                    Our mission is to provide innovative, scalable, and user-friendly digital solutions that help businesses thrive in the digital age. We believe in the power of technology to transform ideas into impactful realities.
                                </p>
                            </div>
                        )}
                        {activeTab === 'vision' && (
                            <div className="p-6 bg-fuchsia-100 rounded-lg">
                                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Shaping the Future of Digital Experiences</h3>
                                <p className="text-gray-700">
                                    We envision a world where technology seamlessly enhances everyday life. Our vision is to be at the forefront of digital innovation, creating solutions that are not only functional but also delightful to use.
                                </p>
                            </div>
                        )}
                        {activeTab === 'values' && (
                            <div className="p-6 bg-fuchsia-100 rounded-lg">
                                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Core Values</h3>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li><strong>Innovation:</strong> We constantly explore new ideas and approaches</li>
                                    <li><strong>Excellence:</strong> We strive for the highest quality in everything we do</li>
                                    <li><strong>Collaboration:</strong> We believe great things happen when people work together</li>
                                    <li><strong>Integrity:</strong> We are honest, transparent, and ethical in all our dealings</li>
                                    <li><strong>Customer Focus:</strong> Our clients' success is our ultimate measure of achievement</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;