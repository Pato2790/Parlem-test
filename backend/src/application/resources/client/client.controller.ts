import { ClientServices } from './../../../domain/client/client.services';
import { ClientContract } from './../../../domain/client/client.contract';
import { CodigoHttp } from "../../common/constants";
import { ClientDTO } from '../../../domain/client/client.model';
import logger = require("../../../infrastructure/config/logger");

export class ClientController {

  private clientService: ClientContract = new ClientServices();

  getClients = async (_req, res) => {
    const response = new ClientDTO();

    try {
      response.result = await this.clientService.getClients();
      res.status(CodigoHttp.OK).send(response);
    } catch (e) {
      response.error = e.message;
      response.result = [];
      logger.error(e.message);
      res.status(CodigoHttp.INTERNAL_SERVER_ERROR).send(response);
    }
  }
}

