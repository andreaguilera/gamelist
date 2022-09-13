const mongoose = require("mongoose");

const Game = mongoose.model("Game", {
  name: { type: String, required: true}, // try to do this way, because you put if is required or not
  platform: String,
  relaseYear: Number,
  cover: String,
  category: String,
});

module.exports = Game;
