const express = require("express"); // "require" the Express module
const app = express(); // obtain the "app" object
const HTTP_PORT = process.env.PORT || 5000; // assign a port

// start the server on the port and output a confirmation ot the console
app.listen(HTTP_PORT, () => console.log(`server listening on: ${HTTP_PORT}`));

const path = require("path");
app.use(express.static("public"));

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/about.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});
