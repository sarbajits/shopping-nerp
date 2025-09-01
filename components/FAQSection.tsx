"use client"
import { useState } from 'react';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const FAQSection = () => {
    const [activeId, setActiveId] = useState<number | null>(null);

    const toggleFAQ = (id: number) => {
        setActiveId(activeId === id ? null : id);
    };

    const faqs: FAQItem[] = [
        {
            id: 1,
            question: "What services does Nerp.in provide?",
            answer: "Nerp.in offers a wide range of digital solutions including web development, mobile apps, UI/UX design, and digital marketing services to help businesses grow their online presence."
        },
        {
            id: 2,
            question: "How long does a typical project take?",
            answer: "Project timelines vary based on complexity. A simple website might take 2-3 weeks, while more complex applications can take 2-4 months. We provide detailed timelines after our initial consultation."
        },
        {
            id: 3,
            question: "Do you provide ongoing support after project completion?",
            answer: "Yes, we offer various support packages to ensure your digital solution continues to perform optimally. Our support includes maintenance, updates, and troubleshooting."
        },
        {
            id: 4,
            question: "Can you work with our existing design/development team?",
            answer: "Absolutely! We often collaborate with in-house teams, providing specialized expertise where needed. We're flexible in our approach to ensure seamless integration."
        },
        {
            id: 5,
            question: "What technologies do you specialize in?",
            answer: "Our team is proficient in modern technologies including React, Next.js, Node.js, Python, React Native, and various databases. We choose the best stack for each project's requirements."
        },
        {
            id: 6,
            question: "How do you handle project communication?",
            answer: "We maintain transparent communication through regular updates, video calls, and project management tools. Each project has a dedicated manager as your single point of contact."
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about our services, process, and how we can help your business grow.
                    </p>
                </div>

                <div className="space-y-2">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
                        >
                            <button
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                                onClick={() => toggleFAQ(faq.id)}
                                aria-expanded={activeId === faq.id}
                            >
                                <span className="text-lg font-medium text-gray-800 pr-4">{faq.question}</span>
                                <svg
                                    className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${activeId === faq.id ? 'transform rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div
                                className={`px-6 pb-6 pt-0 overflow-hidden transition-all duration-300 ${activeId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-6">Still have questions? We're here to help!</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;