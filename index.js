const express = require("express");
const app = express();
const PORT = 3003;
const routes = require("./routes/routes");
app.use(routes);

app.listen(PORT, () => {
  console.log("Server is Running on port " + PORT);
});
