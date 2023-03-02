import User from "../model/User.js";

export const AdminRole = async (req, res, next) => {
  try {
    const { user_id } = req.body;
    const user = await User.findById(user_id);
    if (user.role === "admin") {
      return next();
    } else {
      console.log("admin erhee avna uu!");
    }
  } catch (error) {
    res.status(401).send({
      error: error.message,
    });
  }
};
