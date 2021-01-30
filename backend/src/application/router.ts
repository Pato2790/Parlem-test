import { router } from '../infrastructure/server';

// Application main route
import application = require("../infrastructure/config/api");
import clients = require('./resources/client/client.routes');
import products = require('./resources/product/product.routes');

const API_BASE = application.api.base + application.api.name;

router.use(API_BASE, clients);
router.use(API_BASE, products);

export = router;
