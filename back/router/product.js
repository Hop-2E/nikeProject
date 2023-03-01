import express from 'express';
import { buyProduct } from '../controller/user.js';
import { AdminRole } from '../middleware/role.js';
import {
  getAllProduct,
  createProduct,
  getUsersProduct,
  approveProduct,
  getProductByCategory,
  // findProduct,
  // superDelete,
} from '../controller/product.js';
import { checkToken } from '../middleware/middleware.js';
// import { checkToken } from '../middleware/middleware.js';
// import { paginationFunction } from '../Pagination/pagination.js';

const router = express.Router();
router.route('/').get(getAllProduct);
router.get('/:id', getUsersProduct);
router.post('/order', buyProduct);
router.post('/approve', approveProduct);
router.post('/category', getProductByCategory);
router.post('/createProduct', AdminRole, checkToken, createProduct);
// router.route('/:params').get(findProduct);
// router.delete('/delete/:_id', superDelete); AdminRole, dotorn sha
// router.route('/History').get(paginationFunction(Link));

export default router;
