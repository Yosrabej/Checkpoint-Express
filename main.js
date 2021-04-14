const express = require("express");
const app = express();

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

app.use(express.static("Public"));
const port = 3000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
