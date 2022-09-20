// config inicial
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// forma de ler JSON / middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

const corsOptions = {
  origin: "http://192.168.1.103:3000",
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

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
    app.listen(3010, () => console.log("Servidor rodando na porta 3010"));
  });
