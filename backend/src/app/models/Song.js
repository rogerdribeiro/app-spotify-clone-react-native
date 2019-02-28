const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String
  },
  author: {
    type: String
  },
  file: {
    type: String
  }
});

module.exports = mongoose.model("Song", SongSchema);
