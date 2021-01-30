import { router } from '../../../infrastructure/server';
import { ProductController } from './product.controller';

router.get('/productByClient/:id',  new ProductController().getProductsByClient);
 
export = router;