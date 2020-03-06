var notes = require("../data/tableData");
var waitListData = require("../data/waitinglistData");


module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(noteContests);
  });

  app.post("/api/notes", function(req, res) {

    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });


  app.delete("/api/notes/:id", function(req, res) {

    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};
