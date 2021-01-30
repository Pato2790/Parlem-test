import { Client } from "../../infrastructure/persistence/entity/client";

export class ClientDTO {
    result: Client[];
    error: string;
};
