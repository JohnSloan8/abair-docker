import express from "express";
import cors from "cors";
import runErrorCheck from "./runErrorCheck.js";
const app = express();
const host = "localhost";
const port = 8002;
app.use(express.json());
app.use(cors());
app.post("/run-full-check", function (req, res) {
    const { word, target } = req.body;
    const errorCheckOutput = runErrorCheck(word, target);
    const output = JSON.stringify(errorCheckOutput);
    console.log("error check output:", output);
    res.send(output);
});
app.get("/", (req, res) => {
    res.send("Welcome to Error Check!");
});
app.listen(port, function (error) {
    if (error)
        throw error;
    console.log(`Server is running on http://${host}:${port}`);
});
