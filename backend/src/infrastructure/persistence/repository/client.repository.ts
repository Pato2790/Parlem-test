import { ClientInterface } from './../interfaces/client.interface';
import { clients } from '../../data/clients'
import { Client } from '../entity/client';

export class ClientRepository implements ClientInterface {
    async getClients(): Promise<Client[]> {
        try {
            return await clients;

        } catch (err) {
            throw (err.message);
        }
    }
}
