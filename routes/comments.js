const Post = require('../models/post');
const Comment = require('../controllers/comments');
const express = require('express');
const catchAsync = require('../utils/catchAsync');
const router = express.Router({mergeParams: true});
const {isLoggedIn, isCommentAuthor} = require('../middleware');

router.post('/',isLoggedIn, catchAsync(Comment.addComment));

router.delete('/:commentId',isLoggedIn, isCommentAuthor,catchAsync(Comment.deleteComment));

module.exports = router;
