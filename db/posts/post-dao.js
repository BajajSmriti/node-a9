const model = require('./post-model');

const findAllPosts = () => model.find();
const createPost = (post) => model.create(post);
const deletePost = (id) => model.deleteOne({ _id: id });
const updatePost = (id, post) => {
  let likes, liked;
  if (!post.liked) {
    likes = post.likes + 1
    liked = true
  }
  else {
    likes = post.likes - 1
    liked = false
  }

  return model.updateOne({ _id: id }, { $set: { likes: likes, liked: liked} });
}

module.exports = {
  findAllPosts, createPost,
  deletePost, updatePost
};
