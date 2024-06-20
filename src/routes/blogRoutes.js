const express = require('express');
const { getBlogs, createBlog, updateBlog, deleteBlog } = require('../controllers/blogController');
const { ensureAuth } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', getBlogs);
router.post('/', ensureAuth, createBlog);
router.put('/:id', ensureAuth, updateBlog);
router.delete('/:id', ensureAuth, deleteBlog);

module.exports = router;
