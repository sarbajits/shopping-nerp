// components/ProductItem.tsx
import { Product } from '@/types/category';
import React from 'react';

interface ProductItemProps {
    product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    return (
        <div className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg cursor-pointer">
            <img
                src={product.img}
                alt={product.name}
                className="w-12 h-12 rounded-md object-cover"
            />
            <div>
                <p className="text-sm font-semibold text-gray-800">
                    {product.name}
                </p>
                <p className="text-xs text-gray-500">{product.desc}</p>
            </div>
        </div>
    );
};

export default ProductItem;