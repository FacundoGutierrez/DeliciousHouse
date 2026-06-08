import { Product } from './product.model';

export interface Client {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    order: Product[];
    cost: number;
}