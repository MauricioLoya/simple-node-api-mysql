import { Router } from 'express';
import UserController from './UserController';
import userRules from './userRules';

const userRouter = Router();
const userController = new UserController();

// Add your endpoints here
userRouter.route('/user').get(
    userRules.addUser,
    userController.addUser
);



export default userRouter;