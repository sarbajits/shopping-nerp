// components/CategoryCard.tsx
import React from 'react';
import CategoryPopup from './CategoryPopup';
import { Category, PopupPosition } from '@/types/category';

interface CategoryCardProps {
    category: Category;
    isHovered: boolean;
    position: PopupPosition;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
    category,
    isHovered,
    position,
    onMouseEnter,
    onMouseLeave,
    onClick
}) => {
    return (
        <div
            id={`category-${category.id}`}
            className="relative flex flex-col items-center"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        >
            {/* Category Icon */}
            <div className="rounded-3xl overflow-hidden shadow-sm shadow-amber-50 hover:shadow-md transition-shadow duration-300">
                <img
                    src={category.image}
                    alt={category.name}
                    className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 object-cover"
                />
            </div>
            <div className="text-fuchsia-400 font-semibold text-xs md:text-sm mt-2 text-center">
                {category.name}
            </div>

            {/* Popup */}
            {isHovered && (
                <CategoryPopup category={category} position={position} />
            )}
        </div>
    );
};

export default CategoryCard;