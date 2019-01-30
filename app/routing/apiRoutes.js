let path = require("path");
let friends = require("../data/friends.js");

module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(friends);
    });

    app.post("api/friends", (req, res) => {
        let input = req.body;
        let responses = input.scores;

        let matchName = "";
        let matchImage = "";
        let difference = 10000;

        for (var i in friends) {
            let diff = 0;
            for (var j in responses) {
                diff += Math.abs(friends[i].scores[j] - responses[j]);
            }
            if (diff < difference) {
                difference = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }
        friends.push(input);
        res.json({ status: "OK", matchName: matchName, matchImage: matchImage });
    });
};