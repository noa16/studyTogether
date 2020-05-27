const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema(
  {
    location: {
      type: String,
      required: true,
      trim: true,
    },
    topic: {
      type: String,
      required: true,
      trim: true,
    },
    info: {
      type: String,

      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Groups = mongoose.model("Groups", groupSchema);

module.exports = Groups;
