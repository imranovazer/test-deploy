import express from 'express'
import { createNew, deleteTodo, editTodo, getAll, getById, } from '../controllers/TodoController.js';


const router = express.Router();



router.route('/').get(getAll).post(createNew);


router.route('/:id').get(getById).put(editTodo).delete(deleteTodo)


export default router