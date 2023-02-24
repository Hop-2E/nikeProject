import User from "../model/User.js";
import Product from "../model/Product.js";

export const AdminRole = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const product = await Product.findById(_id);
    const user = await User.findById(product.user_id);
    if (user.role === "admin") {
      return next();
    } else {
      console.log("admin erh avna uu");
    }
  } catch (error) {
    res.status(401).send({
      success: false,
    });
  }
};