import express from "express";
const app = express();
import cors from "cors";
app.use(express.json());
app.use(cors());
const host = "localhost";
const port = 8002;
import runErrorCheck from "./runErrorCheck.js";
app.post("/apis/error-check/run-full-check", function (req, res) {
    const { word, target } = req.body;
    const errorCheckOutput = runErrorCheck(word, target);
    const responseData = `${JSON.stringify(errorCheckOutput)}`;
    console.log("responseData", responseData);
    res.send(responseData);
});
app.get("/apis/error-check", (req, res) => {
    console.log("in home");
    res.send("Welcome to Error Check!");
});
app.listen(port, function (error) {
    if (error)
        throw error;
    console.log(`Server is running on http://${host}:${port}`);
});
