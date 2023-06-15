const Stories = require("../models/storiesModel");
const Users = require("../models/userModel");

const storiesCtrl = {
  getStories: async (req, res) => {
    try {
      const stories = Stories.find({
        user: [...req.user.following, req.user._id],
      });
      const sortStories = await stories
        .sort("-createdAt")
        .populate("user likes", "avatar username fullname followers");

      res.status(200).json({
        msg: "Success!",
        result: sortStories.length,
        sortStories,
      });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },
  createStories: async (req, res) => {
    try {
      const { stories } = req.body;
      const newStories = new Stories({
        stories,
        user: req.user._id,
      });
      await newStories.save();
      res.status(200).json({
        msg: "Created newStories!",
        newStories: {
          ...newStories._doc,
          user: req.user,
        },
      });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },
  updateStories: async (req, res) => {
    try {
      const { stories } = req.body;
      console.log(stories);
      const story = await Stories.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { stories: stories } }
      );

      res.status(200).json({
        msg: "Updated Story!",
        story: {
          ...story._doc,
          stories,
        },
      });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },
};
module.exports = storiesCtrl;
