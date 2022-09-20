const router = require("express").Router();

const Game = require("../models/Game");

//CREATE
router.post("/", async (req, res) => {
  const { name, platform, releaseYear, cover, category } = req.body;

  try {
  if (!name) {
    return res.status(402).json({ error: "O nome é obrigatório" });
  }

  const game = {
    name,
    platform,
    releaseYear,
    cover,
    category,
  };

    await Game.create(game);
    return res.status(201).json({ message: "Jogo adicionado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

//READ

//todos os jogos
router.get("/", async (req, res) => {
  try {
    const games = await Game.find();
    return res.status(200).json(games);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

//filtra por categoria
router.get("/:category", async (req, res) => {
  const { category } = req.params; // destruction the code

  try {
    const games = await Game.find({ category: category });
    if (!games) {
      return res.status(422).json({ message: "Nenhum jogo encontrado!" });
    }
    return res.status(200).json(games);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

//UPDATE
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const { name, platform, releaseYear, cover, category } = req.body;

  try {
  const game = {
    name,
    platform,
    releaseYear,
    cover,
    category,
  };

    const updatedGame = await Game.updateOne({ _id: id }, game);

    if (updatedGame.matchedCount === 0) {
      return res.status(422).json({ message: "Nenhum jogo encontrado!" });
    }
    return res.status(200).json(game);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const game = await Game.findOne({ _id: id });

  try {
  if (!game) {
    return res.status(422).json({ message: "Nenhum jogo encontrado!" });
  }

    await Game.deleteOne({ _id: id });
    return res.status(200).json({ message: "Jogo deletado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

module.exports = router;
