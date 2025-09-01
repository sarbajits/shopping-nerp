import React from 'react';

function Categories() {
    const categories = [
        { id: 1, name: 'Electronics', image: 'https://placehold.co/200x200/2563eb/FFFFFF/png?text=Electronics' },
        { id: 2, name: 'Fashion', image: 'https://placehold.co/200x200/ec4899/FFFFFF/png?text=Fashion' },
        { id: 3, name: 'Groceries', image: 'https://placehold.co/200x200/10b981/FFFFFF/png?text=Groceries' },
        { id: 4, name: 'Home & Furniture', image: 'https://placehold.co/200x200/f97316/FFFFFF/png?text=Home' },
        { id: 5, name: 'Beauty', image: 'https://placehold.co/200x200/8b5cf6/FFFFFF/png?text=Beauty' },
        { id: 6, name: 'Travel', image: 'https://placehold.co/200x200/06b6d4/FFFFFF/png?text=Travel' },
        { id: 7, name: 'Finance', image: 'https://placehold.co/200x200/84cc16/FFFFFF/png?text=Finance' },
        { id: 8, name: 'Mobile & Accessories', image: 'https://placehold.co/200x200/ef4444/FFFFFF/png?text=Mobile' },

    ];

    return (
        <div className="my-4 p-4 md:p-6 mx-auto max-w-7xl">
            <h2 className="text-gray-500 text-sm md:text-base">Shopping, Finance, Travel</h2>
            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">Explore Categories</h1>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 py-6 md:py-8 border-b border-gray-200">
                {categories.map(category => (
                    <div key={category.id} className="flex flex-col items-center">
                        <div className="rounded-full overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                            <img
                                src={category.image}
                                alt={category.name}
                                className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 object-cover"
                            />
                        </div>
                        <div className="font-semibold text-xs md:text-sm mt-2 text-center">{category.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;
