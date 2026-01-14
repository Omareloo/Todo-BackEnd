import express from 'express';
import { getTasks, createTask, updateTask, deleteTask } from '../Controllers/taskController.js';
import protect from '../MiddleWares/isAuth.js';
import { getTask, } from '../Controllers/taskController.js';
import validateTask from '../Validations/task.Validator.js';

const taskRouter = express.Router();

taskRouter.route('/')
  .get(protect, getTasks)
  .post(protect, validateTask, createTask);

taskRouter.route('/:id')
  .get(protect, getTask)
  .put(protect, validateTask, updateTask)
  .delete(protect, deleteTask);
  
export default taskRouter;