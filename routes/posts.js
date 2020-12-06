const express=require('express');
const postRoutes=require('../controllers/posts.js')

const router = express.Router();

router.get('/', postRoutes.getPosts);
router.post('/', postRoutes.createPost);
router.get('/:id', postRoutes.getPost);
router.patch('/:id', postRoutes.updatePost);
router.delete('/:id', postRoutes.deletePost);
router.patch('/:id/likePost', postRoutes.likePost);

module.exports=router;