const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

const BlogPost = mongoose.model("blogPost", blogPostSchema);

module.exports = BlogPost;
