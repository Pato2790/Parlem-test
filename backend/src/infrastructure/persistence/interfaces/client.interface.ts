import { Client } from "../entity/client";

export interface ClientInterface {
    getClients(): Promise<Client[]>;
}