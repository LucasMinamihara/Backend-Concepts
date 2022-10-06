const express = require("express");
const app = express();
const routes = require("./src/routes");
const PORT = 3003;

app.use(routes);
app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/public"));

app.listen(PORT, () => {
  console.log("Server is running on port" + PORT);
});
