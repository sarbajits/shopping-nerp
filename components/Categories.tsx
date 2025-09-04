// components/Categories.tsx
"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Category, PopupPosition } from '../types/category';
import CategoryCard from './catagory/CategoryCard';

const Categories: React.FC = () => {
    // const categories = [
    //     {
    //         id: 1,
    //         name: "Electronics",
    //         image: "https://placehold.co/200x200/CCCCCC/000000/png?text=Electronics",
    //         products: [
    //             {
    //                 name: "Laptop",
    //                 desc: "High-performance for work and gaming",
    //                 img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Laptop",
    //             },
    //             {
    //                 name: "Headphones",
    //                 desc: "Noise‑cancelling wireless headphones",
    //                 img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Headphones",
    //             },
    //             {
    //                 name: "Laptop",
    //                 desc: "High-performance for work and gaming",
    //                 img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Laptop",
    //             },
    //         ],
    //     },
    //     {
    //         id: 2,
    //         name: "Fashion",
    //         image: "https://placehold.co/200x200/CCCCCC/000000/png?text=Fashion",
    //         products: [
    //             {
    //                 name: "Shirts",
    //                 desc: "Trendy and comfortable styles",
    //                 img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Shirts",
    //             },
    //             {
    //                 name: "Shoes",
    //                 desc: "Stylish sneakers for all occasions",
    //                 img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Shoes",
    //             },
    //         ],
    //     },
    //     {
    //         id: 3,
    //         name: "Groceries",
    //         image: "https://placehold.co/200x200/CCCCCC/000000/png?text=Groceries",
    //         products: [
    //             {
    //                 name: "Vegetables",
    //                 desc: "Fresh and organic vegetables",
    //                 img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Vegetables",
    //             },
    //             {
    //                 name: "Snacks",
    //                 desc: "Tasty and crunchy snack packs",
    //                 img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Snacks",
    //             },
    //         ],
    //     },
    //     {
    //         id: 4,
    //         name: "Books",
    //         image: "https://placehold.co/200x200/CCCCCC/000000/png?text=Books",
    //         products: [
    //             {
    //                 name: "Novels",
    //                 desc: "Captivating stories to escape into",
    //                 img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Novels",
    //             },
    //             {
    //                 name: "Comics",
    //                 desc: "Graphic adventures and fun tales",
    //                 img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Comics",
    //             },
    //         ],
    //     },
    //     {
    //         id: 5,
    //         name: "Toys",
    //         image: "https://placehold.co/200x200/CCCCCC/000000/png?text=Toys",
    //         products: [
    //             {
    //                 name: "Puzzles",
    //                 desc: "Brain-teasers for all ages",
    //                 img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Puzzles",
    //             },
    //             {
    //                 name: "Action Figures",
    //                 desc: "Collectibles for play and display",
    //                 img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Figures",
    //             },
    //         ],
    //     },
    //     {
    //         id: 6,
    //         name: "Beauty",
    //         image: "https://placehold.co/200x200/CCCCCC/000000/png?text=Beauty",
    //         products: [
    //             {
    //                 name: "Lipstick",
    //                 desc: "Bold colors for every mood",
    //                 img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Lipstick",
    //             },
    //             {
    //                 name: "Perfume",
    //                 desc: "Fragrances that linger",
    //                 img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Perfume",
    //             },
    //         ],
    //     },
    //     {
    //         id: 7,
    //         name: "Sports",
    //         image: "https://placehold.co/200x200/CCCCCC/000000/png?text=Sports",
    //         products: [
    //             {
    //                 name: "Football",
    //                 desc: "For your next match",
    //                 img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Football",
    //             },
    //             {
    //                 name: "Tennis Racket",
    //                 desc: "Grip it and go for it",
    //                 img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Tennis",
    //             },
    //         ],
    //     },
    //     {
    //         id: 8,
    //         name: "Home",
    //         image: "https://placehold.co/200x200/CCCCCC/000000/png?text=Home",
    //         products: [
    //             {
    //                 name: "Cushions",
    //                 desc: "Soft accents for comfort",
    //                 img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Cushions",
    //             },
    //             {
    //                 name: "Lamps",
    //                 desc: "Light up your space",
    //                 img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Lamps",
    //             },
    //             {
    //                 name: "Lamps",
    //                 desc: "Light up your space",
    //                 img: "https://placehold.co/80x80/CCCCCC/000000/png?text=Lamps",
    //             },
    //         ],
    //     },
    // ];


    const categories = [
        {
            id: 1,
            name: "Electronics",
            image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?q=10&w=1000",
            products: [
                {
                    name: "Laptop",
                    desc: "High-performance for work and gaming",
                    img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=10&w=1000",
                },
                {
                    name: "Headphones",
                    desc: "Noise‑cancelling wireless headphones",
                    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=10&w=1000",
                },
                {
                    name: "Smartphone",
                    desc: "Latest flagship with premium features",
                    img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=10&w=1000",
                },
            ],
        },
        {
            id: 2,
            name: "Fashion",
            image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=10&w=1000",
            products: [
                {
                    name: "Shirts",
                    desc: "Trendy and comfortable styles",
                    img: "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?q=10&w=1000",
                },
                {
                    name: "Shoes",
                    desc: "Stylish sneakers for all occasions",
                    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=10&w=1000",
                },
                {
                    name: "Dresses",
                    desc: "Elegant and fashionable designs",
                    img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=10&w=1000",
                },
            ],
        },
        {
            id: 3,
            name: "Home & Kitchen",
            image: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=10&w=1000",
            products: [
                {
                    name: "Cookware",
                    desc: "Premium quality kitchen essentials",
                    img: "https://images.unsplash.com/photo-1584990347193-6bebebfeaeee?q=10&w=1000",
                },
                {
                    name: "Furniture",
                    desc: "Modern and comfortable home furniture",
                    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=10&w=1000",
                },
                {
                    name: "Appliances",
                    desc: "Energy-efficient home appliances",
                    img: "https://images.unsplash.com/photo-1592921870789-04563d55041c?q=10&w=1000",
                },
            ],
        },
        {
            id: 4,
            name: "Sports & Fitness",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=10&w=1000",
            products: [
                {
                    name: "Yoga Mat",
                    desc: "Non-slip premium yoga mat",
                    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=10&w=1000",
                },
                {
                    name: "Dumbbells",
                    desc: "Adjustable weight dumbbell set",
                    img: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=10&w=1000",
                },
                {
                    name: "Running Shoes",
                    desc: "Lightweight athletic running shoes",
                    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=10&w=1000",
                },
            ],
        },
        {
            id: 5,
            name: "Books & Stationery",
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=10&w=1000",
            products: [
                {
                    name: "Notebooks",
                    desc: "Premium quality writing notebooks",
                    img: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?q=10&w=1000",
                },
                {
                    name: "Pens",
                    desc: "Smooth writing premium pens",
                    img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=10&w=1000",
                },
                {
                    name: "Bookmarks",
                    desc: "Elegant leather bookmarks",
                    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=10&w=1000",
                },
            ],
        },
        {
            id: 6,
            name: "Beauty & Personal Care",
            image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=10&w=1000",
            products: [
                {
                    name: "Skincare",
                    desc: "Organic skincare products",
                    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=10&w=1000",
                },
                {
                    name: "Hair Care",
                    desc: "Professional hair care products",
                    img: "https://images.unsplash.com/photo-1712641966973-327ce5829913?q=10&w=1000",
                },
                {
                    name: "Makeup",
                    desc: "Premium quality makeup collection",
                    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=10&w=1000",
                },
            ],
        },
        {
            id: 7,
            name: "Toys & Games",
            image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=10&w=1000",
            products: [
                {
                    name: "Board Games",
                    desc: "Family fun board games",
                    img: "https://images.unsplash.com/photo-1629760946220-5693ee4c46ac?q=10&w=100",
                },
                {
                    name: "Building Blocks",
                    desc: "Creative construction blocks",
                    img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=10&w=1000",
                },
                {
                    name: "Puzzles",
                    desc: "Challenging jigsaw puzzles",
                    img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=10&w=1000",
                },
            ],
        },
        {
            id: 8,
            name: "Food & Beverages",
            image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=10&w=1000",
            products: [
                {
                    name: "Organic Snacks",
                    desc: "Healthy and delicious snacks",
                    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=10&w=1000",
                },
                {
                    name: "Coffee & Tea",
                    desc: "Premium blends from around the world",
                    img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=10&w=1000",
                },
                {
                    name: "Gourmet Foods",
                    desc: "Specialty gourmet food items",
                    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=10&w=1000",
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