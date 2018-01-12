//import { userInfo } from "os";

var friends = require("../data/friends.js");

module.exports = function(app) {
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    })

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function(req, res){
        // object for the users new friend their matched with
        var newFriend = {
            name: "",
            photo: "",
            scores: "",
            difference: 10000
        };

        var usersInfo = req.body;

        console.log(usersInfo);
        var usersName = usersInfo.name;
        var usersPhoto = usersInfo.photo;
        // var usersScores = usersInfo['scores[]'];
        var usersScores = usersInfo.scores;
        console.log(usersScores);
        var diffTotal = 0;
        // console.log(userInfo);
        // loop through all possible friends
        for (var i=0; i<friends.length; i++) {
            // console.log(friend);
            diffTotal = 0;
            console.log(friends[i]);
            // loop through all friends scores
            for(var j=0; j<friends[i].scores.length; j++) {
                //calcute the absolute value of the score differential between the user and the possible frineds in the database
                diffTotal += Math.abs(parseInt(friends[i].scores[j]) - parseInt(usersScores[j]));
            }    
                //here we are seeing if the sum of the differences is less then the sum of the differences between the user and their current match
                if (diffTotal < newFriend.difference) {
                    //if it is then we give them their new friend here
                    newFriend.name = friends[i].name;
                    newFriend.photo = friends[i].photo;
                    newFriend.difference = diffTotal;
                }
    
        }
        // adding new user to database
        friends.push(req.body);

        res.json({newFriend});
    });
}