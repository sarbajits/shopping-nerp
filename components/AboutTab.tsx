"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
    {
        id: "mission",
        label: "Mission",
        content:
            "Our mission is to elevate the quality of life of the urban consumer by offering unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, 'Let’s do this.'",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=10&w=1000",
    },
    {
        id: "vision",
        label: "Vision",
        content:
            "Our vision is to be the most trusted platform that empowers lives with innovation, speed, and reliability.",
        image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=10&w=1000",
    },
    {
        id: "values",
        label: "Values",
        content:
            "Our values are honesty, respect, empathy, and courage. These principles guide our every decision and action.",
        image: "https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=10&w=1000",
    },
];

const AboutTab: React.FC = () => {
    const [activeTab, setActiveTab] = useState("mission");

    const active = tabs.find((tab) => tab.id === activeTab)!;

    return (
        <section className="w-full bg-gradient-to-b from-black to-gray-900 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-10 sm:mb-12 md:mb-16">
                <span className="w-full inline-block border-t-4 border-b-4 border-fuchsia-600 px-4 py-2 tracking-wide">
                    GET TO KNOW US
                </span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
                {/* Tabs */}
                <div className="flex flex-row justify-center lg:flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-semibold rounded-full lg:rounded-2xl transition-all duration-300 ease-in-out
                                ${activeTab === tab.id
                                    ? "bg-fuchsia-600 text-white shadow-md lg:shadow-none lg:border-l-4 lg:border-fuchsia-600 hover:bg-fuchsia-800"
                                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                                } transform hover:scale-105 lg:hover:scale-100`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 md:gap-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="w-full"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-6 md:mb-8">
                                <Image
                                    src={active.image}
                                    alt={active.label}
                                    width={600}
                                    height={360}
                                    className="w-full h-auto object-cover aspect-video transition-transform duration-500 hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            </div>
                            <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-prose">
                                {active.content}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default AboutTab;