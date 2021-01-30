import { Product } from '../../infrastructure/persistence/entity/product';

export interface ProductContract {
    getProductsByClient(customerId): Promise<Product[]>;
}
