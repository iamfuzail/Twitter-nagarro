const express = require("express");
const router = express.Router();

const {
  createPost,
  likePost,
  deletePost
} = require("../controller/tweet");

router.post("/", createPost);
router.post("/like", likePost);
router.post("/delete", deletePost);

module.exports = router;
