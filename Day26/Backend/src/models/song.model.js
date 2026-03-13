const { default: mongoose } = require("mongoose");
const momgoose = require("mongoose");

const songSchema = new momgoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    posterUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    mood: {
      type: String,
      enum: {
        values: ["sad", "happy", "surprised"],
        message: "enum this is",
      },
    },
  },

  { timestamps: true },
);

const songModel = mongoose.model("songs", songSchema);

module.exports = songModel;
