export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: 'budin' | 'pastry' | 'cake' | 'cookie' | 'other'; // need to be updated based on the actual categories in your application
    quantity: number;
    image: string;
    isAvailable: boolean;
    createdAt: Date;
    updatedAt: Date;
}