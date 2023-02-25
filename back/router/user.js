import express from 'express';
import { createUser, getAllUser, getUser, login } from '../controller/user.js';
import { checkToken } from '../middleware/middleware.js';
const routerUser = express.Router();

routerUser
  .all(checkToken)
  .get('/', getAllUser)
  .post('/SignUp', createUser)
  .post('/SignIn', login);
routerUser.route('/:id').get(getUser);

export default routerUser;
