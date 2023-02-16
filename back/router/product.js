import express from 'express';
import {
  getAllProduct,
  createProduct,
  findProduct,
  superDelete,
} from '../controller/product.js';
// import { checkToken } from '../middleware/middleware.js';
// import { AdminRole } from '../middleware/role.js';
// import Product from '../model/Product.js';
// import { paginationFunction } from '../Pagination/pagination.js';

const router = express.Router();
router.route('/').get(getAllProduct);
router.post('/', createProduct); //checkToken, dotorn sha
router.route('/:params').get(findProduct);
router.delete('/delete/:_id', superDelete); //AdminRole, dotorn sha
// router.route('/History').get(paginationFunction(Link));

export default router;
