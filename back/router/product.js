import express from 'express';
import { buyProduct } from '../controller/user.js';
import { AdminRole } from '../middleware/role.js';
import {
  getAllProduct,
  createProduct,
  getUsersProduct,
  approveProduct,
  getProductByCategory,
  getProductById,
  getAllOrder,
  // findProduct,
  // superDelete,
} from '../controller/product.js';
import { checkToken } from '../middleware/middleware.js';
// import { checkToken } from '../middleware/middleware.js';
// import Product from '../model/Product.js';
// import { paginationFunction } from '../Pagination/pagination.js';

const router = express.Router();
router.route('/').get(getAllProduct);
router.post('/', AdminRole ,createProduct); //checkToken, dotorn sha
router.get('/users/:id', getUsersProduct);
router.get('/orders', getAllOrder);
router.get('/:id', getProductById);

router.post('/order', buyProduct);
router.post('/approve', approveProduct);
router.post('/category', getProductByCategory);
router.post('/createProduct', AdminRole, checkToken, createProduct);
// router.route('/:params').get(findProduct);
// router.delete('/delete/:_id', superDelete); //AdminRole, dotorn sha

export default router;