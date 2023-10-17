const express = require("express");
const app = express();


app.use(express.static(__dirname))
app.get("/", (req, res) => {
    console.log("/index.html")
    res.sendFile(__dirname + "/index.html");
});

app.listen(3110, () => {
    console.log("start! express server on port 3000")
})