import express from 'express';

const router = express.Router();

// Create a post
router.post('/', /* TODO */);

// Create a post comment
router.post('/:id/comments', /* TODO */);

// Get a post by id
router.get('/:id', /* TODO */);

// Update a post
router.patch('/:id', /* TODO */);

// Get all posts
router.get('/', /* TODO */);

// Delete a post
router.delete('/:id', /* TODO */);

// Get posts by category
router.get('/category/:category', /* TODO */);

export default router;
