"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const MobilePhotoSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Array of placeholder image URLs with different themes
    const slides = [
        // "https://placehold.co/600x400/2563eb/white?text=Nerp.in+Mobile",
        // "https://placehold.co/600x400/7e22ce/white?text=Web+Solutions",
        // "https://placehold.co/600x400/dc2626/white?text=App+Development",
        // "https://placehold.co/600x400/059669/white?text=UI/UX+Design",
        // "https://placehold.co/600x400/ea580c/white?text=Digital+Marketing",
        "https://template.canva.com/EAGm8QmWPNs/1/0/800w-jufneOEXpuA.jpg",
        "https://template.canva.com/EAGdujDpBQ8/1/0/800w-aBbq1tVYqy0.jpg",
        "https://template.canva.com/EAGTMetvy5I/1/0/800w-4He6WVTrpxU.jpg",
        "https://template.canva.com/EAGW0JiCgDk/3/0/800w-dmJsxfycg3E.jpg"
    ];

    // Auto-advance the slider
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [slides.length, isPaused]);

    return (
        <div
            className="lg:hidden relative w-full mt-20 h-64 overflow-hidden rounded-lg shadow-md"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Slides container */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <Image
                            src={slide}
                            alt={`Slide ${index + 1}`}
                            width={600}
                            height={400}
                            className="w-full h-64 object-cover"
                            unoptimized
                        />
                    </div>
                ))}
            </div>

            {/* Indicator dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                            ? "bg-white scale-125"
                            : "bg-white/50 hover:bg-white/80"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default MobilePhotoSlider;
