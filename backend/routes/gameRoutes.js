const router = require("express").Router();

const Game = require("../models/Game");

//CREATE
router.post("/", async (req, res) => {
  const { name, platform, releaseYear, cover, category } = req.body;

  if (!name) {
    res.status(402).json({ error: "O nome é obrigatório" });
    return;
  }

  const game = {
    name,
    platform,
    releaseYear,
    cover,
    category,
  };

  try {
    await Game.create(game);
    res.status(201).json({ message: "Jogo adicionado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//READ

//todos os jogos
router.get("/", async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//filtra por categoria
router.get("/:category", async (req, res) => {
  const category = req.params.category;

  try {
    const games = await Game.find({ category: category });
    if (!games) {
      res.status(422).json({ message: "Nenhum jogo encontrado!" });
      return;
    }
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//UPDATE
router.patch("/:id", async (req, res) => {
  const id = req.params.id;

  const { name, platform, releaseYear, cover, category } = req.body;

  const game = {
    name,
    platform,
    releaseYear,
    cover,
    category,
  };

  try {
    const updatedGame = await Game.updateOne({ _id: id }, game);

    if (updatedGame.matchedCount === 0) {
      res.status(422).json({ message: "Nenhum jogo encontrado!" });
      return;
    }
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const game = await Game.findOne({ _id: id });

  if (!game) {
    res.status(422).json({ message: "Nenhum jogo encontrado!" });
    return;
  }

  try {
    await Game.deleteOne({ _id: id });
    res.status(200).json({ message: "Jogo deletado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
