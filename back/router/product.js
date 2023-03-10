import express from "express";
import { buyProduct } from "../controller/user.js";
import { AdminRole } from "../middleware/role.js";
import {
  getAllProduct,
  createProduct,
  getUsersProduct,
  approveProduct,
  getProductByCategory,
  getProductById,
  getAllOrder,
} from "../controller/product.js";
import { checkToken } from "../middleware/middleware.js";

const router = express.Router();
router.route("/").get(getAllProduct);
router.post("/", AdminRole, createProduct);
router.get("/users/:id", getUsersProduct);
router.get("/orders", getAllOrder);
router.get("/:id", getProductById);
router.post("/order", buyProduct);
router.post("/approve", approveProduct);
router.post("/category", getProductByCategory);
router.post("/createProduct", AdminRole, checkToken, createProduct);

export default router;
