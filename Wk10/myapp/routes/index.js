var express = require('express');
var router = express.Router();

let notes = [
  { id: 1, title: "Grocery List", body: "Eggs, Milk, Bread, Butter", color: "red", starred: false },
  { id: 2, title: "To Do List", body: "Laundry, Dishes, Homework", color: "white", starred: false }
];

router.get("/note/:id/edit", function(req, res) {
  let id = parseInt(req.params.id);
  let note = notes.find(n => n.id === id);
  
  if (note) {
    res.render("edit", { note });
  } else {
    res.status(404).json({ error: "Note not found" });
  }
});

router.get("/note/:id/delete", function(req, res) {
  let id = parseInt(req.params.id);
  notes = notes.filter(n => n.id !== id); // Remove the note with the given ID
  res.redirect("/"); // Redirect to the home page
});

router.post("/submit-note", function(req, res) {
  let id = notes.length > 0 ? Math.max(...notes.map(n => n.id)) + 1 : 1;
  let title = req.body.title;
  let body = req.body.body;
  let color = req.body.color || "white";
  let starred = req.body.starred === "true";

  notes.push({ id, title, body, color, starred });
  res.redirect("/");
});

router.post("/edit-note/:id", function(req, res) {
  let id = parseInt(req.params.id);
  let note = notes.find(n => n.id === id);

  if (note) {
    note.title = req.body.title || note.title;
    note.body = req.body.body || note.body;
    note.color = req.body.color || note.color;
    note.starred = req.body.starred === "true";

    res.redirect("/");
  } else {
    res.status(404).json({ error: "Note not found" });
  }
});

// Home page: List notes
router.get('/', function(req, res) {
  res.render('index', { title: 'Note-Taking App', data: notes });
});

module.exports = router;
