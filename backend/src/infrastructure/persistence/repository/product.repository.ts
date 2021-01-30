import { Product } from './../entity/product';
import { ProductInterface } from "../interfaces/product.interface";
import { products } from '../../data/products';

export class ProductRepository implements ProductInterface {

    async getProductsByClient(customerId: number): Promise<Product[]> {
        try {
            return await products.filter((product: Product) => {
                return product.customerId === customerId;
            })
        } catch (err) {
            throw (err.message);
        }

    }


}
