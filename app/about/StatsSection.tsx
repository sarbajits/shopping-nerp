"use client"
import { useState, useEffect } from 'react';
import AnimatedCounter from './AnimatedCounter';

const StatsSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    const stats = [
        { number: 500, label: 'Projects Completed', suffix: '+' },
        { number: 350, label: 'Happy Clients', suffix: '+' },
        { number: 150, label: 'Team Members', suffix: '+' },
        { number: 8, label: 'Years Experience', suffix: '+' }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`p-6 transition-all duration-1000 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        >
                            <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                            <div className="text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;