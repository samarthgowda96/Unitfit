import express from 'express';
import {register,login, getUserById} from '../controllers/users.js';

const router = express.Router()

router.post('/register',register);
router.post('/login',login)
router.get('/:id',getUserById)

export default router;