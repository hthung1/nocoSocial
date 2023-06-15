const mongoose = require("mongoose");

const storiesSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: "user" },
    stories: {
      type: Array,
      required: true,
    },

    seen: Boolean,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("stories", storiesSchema);
