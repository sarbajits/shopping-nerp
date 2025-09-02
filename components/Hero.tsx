"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"; // Next.js Image component for optimization
import "../components/Hero.css";

// Custom arrow components remain the same, but with TS types
interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const PrevArrow: React.FC<ArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <button>&#10094;</button>
        </div>
    );
};

const NextArrow: React.FC<ArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <button>&#10095;</button>
        </div>
    );
};

function Hero() {
    // Array of image data for cleaner code and easy scaling
    const slides = [
        {
            src: "https://placehold.co/2000x600/212121/333333/png?text=Creative+Solutions",
            alt: "Creative Solutions"
        },
        {
            src: "https://placehold.co/2000x600/212121/333333/png?text=Seamless+Integration",
            alt: "Seamless Integration"
        },
        {
            src: "https://placehold.co/2000x600/212121/333333/png?text=Innovative+Technology",
            alt: "Innovative Technology"
        },
        {
            src: "https://placehold.co/2000x600/212121/333333/png?text=Data-Driven+Results",
            alt: "Data-Driven Results"
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Increased autoplaySpeed for better user experience
        adaptiveHeight: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        customPaging: (i: number) => (
            <div className="custom-dot-line"></div>
        ),
        dotsClass: "slick-dots slick-thumb"
    };

    return (
        <div className="slider-container mx-2 mt-4 mb-2 relative lg:mt-20 lg:mx-8">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="slide overflow-hidden rounded-2xl">
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            width={1000}
                            height={300}
                            className="w-full"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Hero;