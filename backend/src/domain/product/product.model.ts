import { Product } from './../../infrastructure/persistence/entity/product';

export class ProductDTO {
    result: Product[];
    error: string;
};
