const cors = require("cors");
const data = require("./data/data.json");
const express = require("express");

const app = express();
const port = 3000;

app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/express_backend", (req, res) => {
  res.send(data);
});
