const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});
