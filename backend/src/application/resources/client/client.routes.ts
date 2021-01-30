import { router } from '../../../infrastructure/server';
import { ClientController } from './client.controller';

router.get('/clients',  new ClientController().getClients);
 
export = router;