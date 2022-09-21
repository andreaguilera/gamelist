const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String, required: true }, // try to do this way, because you put if is required or not
  platform: String,
  relaseYear: Number,
  cover: String,
  category: String,
});

schema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
  },
});

const Game = mongoose.model("Game", schema);

module.exports = Game;
