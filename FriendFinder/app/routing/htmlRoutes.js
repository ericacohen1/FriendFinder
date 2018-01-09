var path = require("path");

module.exports = function(app) {
    // A GET Route to /survey which should display the survey page.
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survery.html"));
        console.log(path.join(__dirname, "view.html"));
    });
    // A default, catch-all route that leads to home.html which displays the home page.
    app.user(function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    })
}