/**
 * Interface só está disponível no TypeScript
 */
export interface Product {
    id?: number; // ? -> significa que esse id é opcional
    name: string;
    price: number;
}