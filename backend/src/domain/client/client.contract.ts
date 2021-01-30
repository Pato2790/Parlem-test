import { Client } from './../../infrastructure/persistence/entity/client';

export interface ClientContract {
    getClients(): Promise<Client[]>;
}
