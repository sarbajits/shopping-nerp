'use client';

import { useState, useEffect } from 'react';
import styles from './Carousel.module.css';
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";

interface ProductItem {
    name: string;
    description: string;
}

interface Product {
    id: number;
    category: string;
    items: ProductItem[];
    color: string;
}

const products: Product[] = [
    {
        id: 1,
        category: 'Business Solutions',
        items: [
            { name: 'NerpBiz', description: 'Complete business management suite for SMEs and enterprises.' },
            { name: 'NerpRetail', description: 'Point of sale and inventory management for retail businesses.' },
            { name: 'NerpBooks', description: 'Accounting and financial management software.' },
            { name: 'NerpOK', description: 'Accounting and financial management software.' },
            { name: 'NerpCheck', description: 'Accounting and financial management software.' },
            { name: 'NerpDone', description: 'Accounting and financial management software.' },
        ],
        color: '#DD00DD'
    },
    {
        id: 2,
        category: 'Custom Development',
        items: [
            { name: 'NerpCustom', description: 'Tailor-made software solutions for unique business needs.' },
            { name: 'NerpIntegrate', description: 'Seamless integration with existing systems and platforms.' },
            { name: 'NerpAPIs', description: 'Robust API development for extended functionality.' }
        ],
        color: '#AA00FF'
    },
    {
        id: 3,
        category: 'Support & Services',
        items: [
            { name: 'NerpSupport', description: '24/7 technical support and troubleshooting services.' },
            { name: 'NerpTrain', description: 'Comprehensive training programs for your team.' },
            { name: 'NerpConsult', description: 'Expert consultation for business process optimization.' }
        ],
        color: '#FF33FF'
    },
    {
        id: 4,
        category: 'Industry Solutions',
        items: [
            { name: 'NerpManufacturing', description: 'Specialized solutions for manufacturing industries.' },
            { name: 'NerpHealthcare', description: 'Healthcare management and patient care systems.' },
            { name: 'NerpEducation', description: 'Learning management systems for educational institutions.' }
        ],
        color: '#FF0099'
    }
];

const Carousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Mobile breakpoint
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + products.length) % products.length);
    };

    if (isMobile) {
        // Mobile View: Accordion
        return (
            <div className={styles.accordionContainerMobile}>
                <h3 className={styles.topTextMobile}>We have 20+ products serving millions of customers across...</h3>
                {products.map((product) => (
                    <div key={product.id} className={styles.accordionItem} style={{ borderColor: product.color }}>
                        <button
                            className={styles.accordionHeader}
                            style={{ borderColor: product.color }}
                            onClick={() => setOpenAccordion(openAccordion === product.id ? null : product.id)}
                        >
                            {product.category}
                            <span className="inline-flex items-center">
                                {openAccordion === product.id ? (
                                    <ChevronUp className="w-4 h-4" />
                                ) : (
                                    <ChevronDown className="w-4 h-4" />
                                )}
                            </span>
                        </button>
                        {openAccordion === product.id && (
                            <div className={styles.accordionContent} style={{ borderColor: product.color }}>
                                {product.items.map((item, idx) => (
                                    <div key={idx} className={styles.productItem}>
                                        <span className={styles.productName}>{item.name}</span>
                                        <p className={styles.productDescription}>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    }

    // 💻 Desktop View → Carousel
    return (
        <div className={styles.carouselContainer}>
            <div className={styles.topText}>
                <p>
                    We have 20+ products serving millions of customers across{' '}
                    {products.map((p, i) => (
                        <span
                            key={i}
                            className={styles.highlightedText}
                            style={activeSlide === i ? { color: p.color } : {}}
                        >
                            {p.category}
                            {i < products.length - 1 ? ', ' : '.'}
                        </span>
                    ))}
                </p>
            </div>


            <div className={styles.carouselWrapper}>
                <button
                    onClick={prevSlide}
                    className={styles.navButton}
                    aria-label="Previous Slide"
                >
                    <ChevronLeft size={24} />
                </button>
                <div className={styles.slidesContainer}>
                    {products.map((product, index) => {
                        let className = styles.slide;
                        if (index === activeSlide) className += ` ${styles.activeSlide}`;
                        else if (index === (activeSlide + 1) % products.length) className += ` ${styles.nextSlide}`;
                        else if (index === (activeSlide - 1 + products.length) % products.length) className += ` ${styles.prevSlide}`;
                        else className += ` ${styles.hiddenSlide}`;

                        return (
                            <div key={product.id} className={className} style={{ backgroundColor: product.color }}>
                                <h3 className={styles.slideCategory}>{product.category}</h3>
                                <div className={styles.productGrid}>
                                    {product.items.map((item, idx) => (
                                        <div key={idx} className={styles.productItem}>
                                            <span className={styles.productName}>{item.name}</span>
                                            <p className={styles.productDescription}>{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <button
                    onClick={nextSlide}
                    className={styles.navButton}
                    aria-label="Next Slide"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div >
    );
};

export default Carousel;
