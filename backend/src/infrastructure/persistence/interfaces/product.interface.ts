import { Product } from './../entity/product';

export interface ProductInterface {
    getProductsByClient(customerId: number): Promise<Product[]>;
}