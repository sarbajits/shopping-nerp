// types/category.ts
export interface Product {
    name: string;
    desc: string;
    img: string;
}

export interface Category {
    id: number;
    name: string;
    image: string;
    products: Product[];
}

export type PopupPosition = "left" | "right" | "bottom";