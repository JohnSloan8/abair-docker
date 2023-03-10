import express from "express";
import path from "path";
const app = express();
app.use(express.json());
const host = "localhost";
const port = 8002;

import runErrorCheck from "./dist/runErrorCheck.js";

app.post("/", function (req, res) {
  const { word, target } = req.body;
  const errorCheckOutput = runErrorCheck(word, target);
  res.send(`${JSON.stringify(errorCheckOutput)}`);
});

app.get("/home", (req, res) => {
  res.send("Welcome to Error Check!");
});

app.listen(port, function (error) {
  if (error) throw error;
  console.log(`Server is running on http://${host}:${port}`);
});
