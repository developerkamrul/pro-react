require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

app.get("/api", (req, res) => {
  res.send("api is working pefectly");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started on ${port}`);
});
