import jwt from "jsonwebtoken";

export const checkToken = (req, res, next) => {
  const token = req.body.token;
  jwt.verify(token, "secret", (err, result) => {
    if (err) {
      res.status(403).send(err);
    } else {
      next();
      return result;
    }
  });
};
