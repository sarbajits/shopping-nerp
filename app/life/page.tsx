"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

const LifeAtNerp = () => {
    const [activeTab, setActiveTab] = useState('culture');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Culture values
    const values = [
        {
            title: "Innovation First",
            description: "We encourage creative thinking and experimentation to build groundbreaking solutions.",
            icon: "💡"
        },
        {
            title: "Collaboration",
            description: "We believe in the power of teamwork and diverse perspectives to achieve extraordinary results.",
            icon: "🤝"
        },
        {
            title: "Growth Mindset",
            description: "We're committed to continuous learning and personal development for all our team members.",
            icon: "🌱"
        },
        {
            title: "Work-Life Balance",
            description: "We prioritize your well-being and understand that great work happens when life is in balance.",
            icon: "⚖️"
        }
    ];

    // Perks and benefits
    const perks = [
        {
            title: "Flexible Work Arrangements",
            description: "Work from anywhere with our hybrid model and flexible hours.",
            icon: "🏡"
        },
        {
            title: "Learning Budget",
            description: "Annual stipend for courses, conferences, and books to fuel your growth.",
            icon: "📚"
        },
        {
            title: "Health & Wellness",
            description: "Comprehensive health insurance and wellness programs for you and your family.",
            icon: "❤️"
        },
        {
            title: "Cutting-Edge Tools",
            description: "Latest hardware and software to do your best work without constraints.",
            icon: "💻"
        },
        {
            title: "Team Retreats",
            description: "Regular company offsites and team-building activities in amazing locations.",
            icon: "✈️"
        },
        {
            title: "Competitive Compensation",
            description: "Attractive salary, bonuses, and equity options for exceptional talent.",
            icon: "💰"
        }
    ];

    // Testimonials
    const testimonials = [
        {
            name: "Priya M.",
            role: "Senior Developer",
            quote: "What I love most about Nerp is the trust and autonomy we're given. I'm encouraged to take initiative and innovate, which has accelerated my growth tremendously.",
            avatar: "P"
        },
        {
            name: "Alex T.",
            role: "Product Designer",
            quote: "The collaborative culture here is incredible. Every voice is heard, and we're constantly learning from each other across different disciplines.",
            avatar: "A"
        },
        {
            name: "Marcus L.",
            role: "Data Scientist",
            quote: "Nerp's commitment to work-life balance is genuine. I've never been more productive while also having time for my family and hobbies.",
            avatar: "M"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute top-0 right-0 -mr-40 mt-10 opacity-10">
                    <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="200" cy="200" r="200" fill="url(#paint0_radial)" />
                        <defs>
                            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 200) rotate(90) scale(200)">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className={`max-w-3xl mx-auto text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Life at Nerp</h1>
                        <p className="text-xl md:text-2xl opacity-90">
                            Where innovation meets passion, and work feels like play. Join us in building the future.
                        </p>
                    </div>
                </div>
            </section>

            {/* Culture & Values */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Culture & Values</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            At Nerp, we've built a culture that fosters innovation, collaboration, and personal growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Perks & Benefits */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Perks & Benefits</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We take care of our team with comprehensive benefits that support both professional and personal well-being.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {perks.map((perk, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start"
                            >
                                <div className="text-3xl mr-4">{perk.icon}</div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{perk.title}</h3>
                                    <p className="text-gray-600">{perk.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Stories */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Hear From Our Team</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Discover what makes Nerp special through the experiences of our team members.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        {testimonial.avatar}
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Photo Gallery */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nerp in Action</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            A glimpse into our workspace, events, and team activities.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                            <div key={item} className="aspect-square bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center text-white font-bold">
                                Team Event
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Us CTA */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
                    <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
                        Explore open positions and discover how you can grow your career at Nerp.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                            View Open Positions
                        </button>
                        <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors duration-300">
                            Learn About Our Hiring Process
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LifeAtNerp;