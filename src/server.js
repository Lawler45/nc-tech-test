const { getCards, getCardById } = require("./controllers/cardController");

const express = require("express");

const app = express();

app.set("json spaces", 2);

app.get("/cards", getCards);

app.get("/cards/:cardId", getCardById);

module.exports = { app };
