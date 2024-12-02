const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const os = require("os");
const hostname = os.hostname();

app.get("/", (req, res) => {
  res.send("Hello V2! I'm " + hostname + " | " + process.env.CONTAINER_NAME);
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    message: "Service is running",
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
