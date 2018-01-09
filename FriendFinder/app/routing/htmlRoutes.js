var path = require("path");

module.exports = function(friendFinder) {
    // A GET Route to /survey which should display the survey page.
    friendFinder.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survery.html"));
    });
    // A default, catch-all route that leads to home.html which displays the home page.
    friendFinder.user(function(req, res) {
        res.sendFile(path.join(__dirname + "/public/home.html"));
    })
}