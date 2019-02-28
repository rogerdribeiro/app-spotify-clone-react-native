const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  songs: []
});

module.exports = mongoose.model("Album", AlbumSchema);
