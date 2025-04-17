import express from 'express';
import { getUsers } from '../controllers/userController.js';

const router = express.Router();

// Get all users
router.get('/users', getUsers);

export default router;
