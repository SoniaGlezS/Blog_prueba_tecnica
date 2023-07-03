const {Router} = require('express')
const router = Router();
const post = require('./post.js')
const createPost = require('./createPost.js')


router.use('/post',post)
router.use('/createPost', createPost)
module.exports = router;