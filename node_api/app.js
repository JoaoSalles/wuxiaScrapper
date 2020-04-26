const express = require("express");
const bodyParser = require("body-parser");
const scrapeChapters = require("./scrapeChapters");
const app = express();

app.use(bodyParser.json());

app.get("/", async (req, res) => {
  let bookingUrl = await scrapeChapters()
  res.send(JSON.stringify(bookingUrl));
});

app.listen(8000, () => {
  console.log("Example app listening on port 8000!");
});
