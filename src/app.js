const express = require("express");
const app = express();
const path = require("path");
const geocode = require("./utilis/geocode");
const hbs = require("hbs");
const port = process.env.PORT || 3000;
const temPath = path.join(__dirname, "../templates/views");
const pubDirPath = path.join(__dirname, "../public");
app.set("view engine", "hbs");
app.set("views", temPath);
app.use(express.static(pubDirPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "index page",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "you have to search a term",
    });
  }
  geocode(req.query.address, (error, geocoData) => {
    if (error) {
      return res.send({ error });
    } else {
      return res.send({
        location: req.query.address,
        temperature: geocoData.temperature,
        weather_descriptions: geocoData.weather_descriptions,
      });
    }
  });
});

app.listen(3000, () => {
  console.log("server started successfully with 3000 port");
});
