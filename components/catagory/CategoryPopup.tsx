// components/CategoryPopup.tsx
import React from 'react';
import ProductItem from './ProductItem';
import { Category, PopupPosition } from '@/types/category';

interface CategoryPopupProps {
    category: Category;
    position: PopupPosition;
}

const CategoryPopup: React.FC<CategoryPopupProps> = ({ category, position }) => {
    return (
        <div
            className={`absolute bg-white shadow-lg rounded-xl border p-4 w-64 z-20 transition-all duration-300`}
            style={{
                top: position === "bottom" ? "100%" : "50%",
                left:
                    position === "right"
                        ? "105%"
                        : position === "left"
                            ? "-270px"
                            : "50%",
                transform:
                    position === "bottom"
                        ? "translateX(-50%)"
                        : "translateY(-50%)",
                marginTop: position === "bottom" ? "10px" : "0",
            }}
        >
            {/* Arrow */}
            {position === "right" && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1">
                    <div className="w-3 h-3 bg-white rotate-45"></div>
                </div>
            )}
            {position === "left" && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1">
                    <div className="w-4 h-4 bg-white rotate-45"></div>
                </div>
            )}
            {position === "bottom" && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1">
                    <div className="w-3 h-3 bg-white rotate-45"></div>
                </div>
            )}

            <h3 className="text-sm font-semibold text-fuchsia-500 mb-3">
                Popular in {category.name}
            </h3>
            <div className="space-y-3">
                {category.products.map((product, idx) => (
                    <ProductItem key={idx} product={product} />
                ))}
            </div>
        </div>
    );
};

export default CategoryPopup;