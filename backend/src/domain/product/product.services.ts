import { Product } from "../../infrastructure/persistence/entity/product";
import { ProductInterface } from "../../infrastructure/persistence/interfaces/product.interface";
import { ProductRepository } from "../../infrastructure/persistence/repository/product.repository";
import { ProductContract } from "./product.contract";


export class ProductServices implements ProductContract {

    productRepository: ProductInterface;

    constructor() {
        this.productRepository = new ProductRepository();
    }

    async getProductsByClient(customerId): Promise<Product[]> {
        try {
            return this.productRepository.getProductsByClient(customerId);
        } catch (error) {
            throw (error.message);
        }

    }
}
