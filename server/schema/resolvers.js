const { User, Posts } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const Post = require("../models/Posts");

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
      .populate("posts");
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
        .populate("posts");
        return userData;
      }
    },
    posts: async (parents, { createdAt }, context) => {
      const posts = await Posts.find().sort({ createdAt: -1 });

      return posts;
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incrrect Credentials");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incrrect Credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    addPost: async (parent, args, context) => {
      if (context.user) {
        const post = await Posts.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { posts: post._id } },
          { new: true }
        );

        return post;
      }
      throw new AuthenticationError("You need tobe logged in!");
    },
    addComment: async (parent, { postId, commentBody }, context) => {
      if (context.user) {
        const comment = await Posts.findByIdAndUpdate(
          { _id: postId },
          {
            $push: {
              comments: { commentBody, username: context.user.username },
            },
          },
          { new: true, runValidators: true }
        );

        return comment;
      }
      throw new AuthenticationError("You need tobe logged in!");
    },
    removePost: async (parent, args, context) => {
      if (context.user) {
        const deleteBook = await Post.findByIdAndDelete(
          {_id: args._id},
          { new: true}
        )
        return deleteBook
        // console.log(deleteBook)
      }
      // throw new AuthenticationError("You need tobe logged in!");
    },
    removeComment: async (parent, args, context) => {
      if(context.user){
        const deleteComment = await Post.findOneAndUpdate(
          { _id: args.postId },
          {$pull: {comments: {_id: args.commentId}}},
          {new: true}
        )
        console.log(deleteComment)
        return deleteComment
      }
      throw new AuthenticationError("You need to be logged in!");
    }
  },
};

module.exports = resolvers;
