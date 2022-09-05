// config inicial
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// forma de ler JSON / middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// rotas da API
const gameRoutes = require("./routes/gameRoutes");

app.use("/game", gameRoutes);

// rota inicial / endpoint
app.get("/", (req, res) => {
  res.json({ message: "Oi express" });
});

// entregar uma porta
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

mongoose
  .connect(
    `mongodb+srv://${user}:${password}@cluster0.cnl7fes.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Conectado ao MongoDB");
    app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
  });

//mongodb+srv://admin:admin123@cluster0.cnl7fes.mongodb.net/?retryWrites=true&w=majority
