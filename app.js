// server.js
const express = require('express');
const router = require("./routers/game")

const app = express();

app.use('/game',router)

app.listen(3000, () => {
  console.log(`Server is running on port ${3000}`);
});
