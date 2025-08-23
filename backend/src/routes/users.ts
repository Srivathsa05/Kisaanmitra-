import express from 'express';
import { protect } from '../middlewares/authMiddleware';

const router = express.Router();

// @route   GET api/users/profile
// @desc    Get user profile
router.get('/profile', protect, (req, res) => {
  res.json({ message: 'User profile endpoint' });
});

// @route   PUT api/users/profile
// @desc    Update user profile
router.put('/profile', protect, (req, res) => {
  res.json({ message: 'Update user profile endpoint' });
});

export default router;
