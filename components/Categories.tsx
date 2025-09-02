// components/Categories.tsx
"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Category, PopupPosition } from '../types/category';
import CategoryCard from './catagory/CategoryCard';

const Categories: React.FC = () => {
    const categories = [
        {
            id: 1,
            name: "Electronics",
            image: "https://placehold.co/200x200/CCCCCC/000000/png?text=Electronics",
            products: [
                {
                    name: "Laptop",
                    desc: "High-performance for work and gaming",
                    img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Laptop",
                },
                {
                    name: "Headphones",
                    desc: "Noise‑cancelling wireless headphones",
                    img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Headphones",
                },
                {
                    name: "Laptop",
                    desc: "High-performance for work and gaming",
                    img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Laptop",
                },
            ],
        },
        {
            id: 2,
            name: "Fashion",
            image: "https://placehold.co/200x200/CCCCCC/000000/png?text=Fashion",
            products: [
                {
                    name: "Shirts",
                    desc: "Trendy and comfortable styles",
                    img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Shirts",
                },
                {
                    name: "Shoes",
                    desc: "Stylish sneakers for all occasions",
                    img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Shoes",
                },
            ],
        },
        {
            id: 3,
            name: "Groceries",
            image: "https://placehold.co/200x200/CCCCCC/000000/png?text=Groceries",
            products: [
                {
                    name: "Vegetables",
                    desc: "Fresh and organic vegetables",
                    img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Vegetables",
                },
                {
                    name: "Snacks",
                    desc: "Tasty and crunchy snack packs",
                    img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Snacks",
                },
            ],
        },
        {
            id: 4,
            name: "Books",
            image: "https://placehold.co/200x200/CCCCCC/000000/png?text=Books",
            products: [
                {
                    name: "Novels",
                    desc: "Captivating stories to escape into",
                    img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Novels",
                },
                {
                    name: "Comics",
                    desc: "Graphic adventures and fun tales",
                    img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Comics",
                },
            ],
        },
        {
            id: 5,
            name: "Toys",
            image: "https://placehold.co/200x200/CCCCCC/000000/png?text=Toys",
            products: [
                {
                    name: "Puzzles",
                    desc: "Brain-teasers for all ages",
                    img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Puzzles",
                },
                {
                    name: "Action Figures",
                    desc: "Collectibles for play and display",
                    img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Figures",
                },
            ],
        },
        {
            id: 6,
            name: "Beauty",
            image: "https://placehold.co/200x200/CCCCCC/000000/png?text=Beauty",
            products: [
                {
                    name: "Lipstick",
                    desc: "Bold colors for every mood",
                    img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Lipstick",
                },
                {
                    name: "Perfume",
                    desc: "Fragrances that linger",
                    img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Perfume",
                },
            ],
        },
        {
            id: 7,
            name: "Sports",
            image: "https://placehold.co/200x200/CCCCCC/000000/png?text=Sports",
            products: [
                {
                    name: "Football",
                    desc: "For your next match",
                    img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Football",
                },
                {
                    name: "Tennis Racket",
                    desc: "Grip it and go for it",
                    img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Tennis",
                },
            ],
        },
        {
            id: 8,
            name: "Home",
            image: "https://placehold.co/200x200/CCCCCC/000000/png?text=Home",
            products: [
                {
                    name: "Cushions",
                    desc: "Soft accents for comfort",
                    img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Cushions",
                },
                {
                    name: "Lamps",
                    desc: "Light up your space",
                    img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Lamps",
                },
                {
                    name: "Lamps",
                    desc: "Light up your space",
                    img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Lamps",
                },
            ],
        },
    ];


    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [position, setPosition] = useState<PopupPosition>("right");
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (hoveredId !== null && containerRef.current) {
            const element = document.getElementById(`category-${hoveredId}`);
            if (element) {
                const rect = element.getBoundingClientRect();
                const popupWidth = 260;
                const spaceRight = window.innerWidth - rect.right;
                const spaceLeft = rect.left;

                if (spaceRight > popupWidth) {
                    setPosition("right");
                } else if (spaceLeft > popupWidth) {
                    setPosition("left");
                } else {
                    setPosition("bottom");
                }
            }
        }
    }, [hoveredId]);

    return (
        <div className="my-4 p-4 md:p-6 mx-auto max-w-7xl" ref={containerRef}>
            <h2 className="text-fuchsia-50 text-sm md:text-base">
                Shopping, Finance, Travel
            </h2>
            <h1 className="text-fuchsia-500 font-bold text-xl md:text-2xl lg:text-3xl">
                Explore Categories
            </h1>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 py-6 md:py-8 border-b border-gray-200">
                {categories.map((category) => (
                    <CategoryCard
                        key={category.id}
                        category={category}
                        isHovered={hoveredId === category.id}
                        position={position}
                        onMouseEnter={() => setHoveredId(category.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Categories;