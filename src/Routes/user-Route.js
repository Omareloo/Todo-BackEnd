import express from 'express';
import { register, login, getProfile , getAllUsers } from '../Controllers/authController.js';
import protect from '../MiddleWares/isAuth.js';
import { validateLogin, validateRegister } from '../Validations/auth.Validator.js';

const userRouter = express.Router();


userRouter.post('/register', validateRegister, register);
userRouter.post('/login', validateLogin, login);
userRouter.get('/profile', protect, getProfile);
userRouter.get('/users', protect, getAllUsers);



export default userRouter;

