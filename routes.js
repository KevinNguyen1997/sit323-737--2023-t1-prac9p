const express = require("express");
const router = express.Router();
const BlogPost = require("./models/blogPost");

// Create a new blogPost
router.post("/", (req, res) => {
  const { title, body } = req.body;

  console.log(req.body);
  const blogPost = new BlogPost({
    title,
    body,
  });

  blogPost
    .save()
    .then(() => {
      res.status(201).json({ message: "BlogPost created successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to create blogPost" });
    });
});

// Get all blogPosts
router.get("/", (req, res) => {
  BlogPost.find()
    .then((blogPosts) => {
      res.json(blogPosts);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to fetch blogPosts" });
    });
});

// Get a specific blogPost
router.get("/:id", (req, res) => {
  const { id } = req.params;

  BlogPost.findById(id)
    .then((blogPost) => {
      if (!blogPost) {
        res.status(404).json({ error: "BlogPost not found" });
      } else {
        res.json(blogPost);
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to fetch blogPost" });
    });
});

// Update a blogPost
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;

  BlogPost.findByIdAndUpdate(id, { title, body })
    .then((blogPost) => {
      if (!blogPost) {
        res.status(404).json({ error: "BlogPost not found" });
      } else {
        res.json({ message: "BlogPost updated successfully" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to update blogPost" });
    });
});

// Delete a blogPost
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  BlogPost.findByIdAndDelete(id)
    .then((blogPost) => {
      if (!blogPost) {
        res.status(404).json({ error: "BlogPost not found" });
      } else {
        res.json({ message: "BlogPost deleted successfully" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to delete blogPost" });
    });
});

module.exports = router;
