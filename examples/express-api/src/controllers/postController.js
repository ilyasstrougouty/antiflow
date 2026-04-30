const postRepository = require('../repositories/postRepository');

async function getPosts(req, res) {
  const { page = 1, limit = 10 } = req.query;
  try {
    // TODO: [USER] - Implement pagination logic using `page` and `limit` query params
    // CONTEXT: Convert page and limit to integers; calculate skip = (page - 1) * limit; pass to repository
    const posts = [];
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function updatePost(req, res) {
  const { id } = req.params;
  try {
    const post = await postRepository.findById(id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    // TODO: [USER] - Validate that the authenticated user owns the post before allowing update or delete
    // CONTEXT: Compare post.authorId with req.user.id (set by authMiddleware); return 403 if mismatch

    const updated = await postRepository.update(id, req.body);
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { getPosts, updatePost };
