import { Client } from '../../infrastructure/persistence/entity/client';
import { ClientRepository } from '../../infrastructure/persistence/repository/client.repository';
import { ClientInterface } from './../../infrastructure/persistence/interfaces/client.interface';
import { ClientContract } from './client.contract';

export class ClientServices implements ClientContract {

    clientRepository: ClientInterface;

    constructor() {
        this.clientRepository = new ClientRepository();
    }

    async getClients(): Promise<Client[]> {
        try {
            return this.clientRepository.getClients();
        } catch (error) {
            throw (error.message);
        }

    }
}
