const express = require("express");
const path = require("path");

const app = express();

app.get("*", (req, res) => {
  res.set("Content-Type", "text/html");
  res.sendFile(path.join(__dirname, "../../../.dist/index.html"));
});

app.listen(3000, () => {
  console.log(`Server is listening on PORT 3000 ...`);
});
