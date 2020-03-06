var noteContests = require("../db/db.json");
var fs = require("fs");

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(noteContests);
  });

  app.post("/api/notes", function(req, res) {

    const note = req.body
    console.log(note);

    noteContests.push(note);
    console.log(noteContests)
    // noteContest write to db.json file// 

    fs.writeFile(__dirname + "../db/db.json", JSON.stringify(noteContests), function(err) {

      if (err) {
        return res.send(err);
      }

      return res.json(true);

    });

      
 
  });


  app.delete("/api/notes/:id", function(req, res) {

    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};
