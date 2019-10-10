const express = require("express");

const app = express();
app.get("*", (req, res) => {
  const pathToJS = "../../../dist/app.js";
  res.set("Content-Type", "text/html");
  res.send(`
    <!DOCTYPE html> 
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
            <script src="${pathToJS}"></script>
        <title>Insulin Calculator</title>
      </head>
      <body>
        <div id="container"></div>
      </body>
    </html>
    `);
});

app.listen(3000, () => {
  console.log(`Server is listening on PORT 3000 ...`);
});
