import { ProductServices } from './../../../domain/product/product.services';
import { ProductContract } from './../../../domain/product/product.contract';
import { CodigoHttp } from "../../common/constants";
import { ProductDTO } from '../../../domain/product/product.model';
import logger = require("../../../infrastructure/config/logger");

export class ProductController {

  private productService: ProductContract = new ProductServices();

  getProductsByClient = async (req, res) => {
    const response: ProductDTO = new ProductDTO();
    const clientId: number = parseInt(req.params.id);

    try {
      response.result = await this.productService.getProductsByClient(clientId);
      res.status(CodigoHttp.OK).send(response);
    } catch (e) {
      response.error = e.message;
      response.result = [];
      logger.error(e.message);
      res.status(CodigoHttp.INTERNAL_SERVER_ERROR).send(response);
    }
  }
}

