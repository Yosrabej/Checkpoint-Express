const express = require("express");
const app = express();
app.use(logger);
app.use(express.static("Public"));

function logger(req, res, next) {
    if (
        new Date().getDay() == 0 ||
        new Date().getDay() == 6 ||
        new Date().getHours() < 9 ||
        new Date().getHours() > 17
    ) {
        return res.sendFile(__dirname + "/Public/closing.html");
    }
    next();
}
const port = 3000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/Public/index.html");
// });
// app.get("/services", (req, res) => {
//     res.sendFile(__dirname + "/Public/services.html");
// });
// app.get("/contact", (req, res) => {
//     res.sendFile(__dirname + "/Public/contact.html");
// });
// app.get("/style.css", (req, res) => {
//     res.sendFile(__dirname + "/Public/style.css");
// });
