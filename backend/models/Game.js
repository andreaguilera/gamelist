const mongoose = require("mongoose");

const Game = mongoose.model("Game", {
  name: String,
  platform: String,
  relaseYear: Number,
  cover: String,
  category: String,
});

module.exports = Game;
