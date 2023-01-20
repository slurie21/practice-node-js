const express = require('express');
// const postController = require('../controllers/post');
const { getPosts, createPost} = require('../controllers/post');
const router = express.Router();
const validator = require('../validation/index');

router.get('/', getPosts);
router.post('/post', validator.createPostValidtor, createPost);

module.exports = router;


