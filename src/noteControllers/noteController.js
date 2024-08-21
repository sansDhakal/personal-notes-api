const fs = require("fs");
const path = require("path");
const dbPath = path.join(__dirname, "../../data/noteDB.json");
let db = require(dbPath);

const saveToDb = () => {
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
};

exports.getAllNotes = (req, res) => {
  res.status(200).json(db.notes);
};

exports.getNoteById = (req, res) => {
  const note = db.notes.find((n) => n.id == req.params.id);
  if (note) {
    res.status(200).json(note);
  } else {
    res.status(404).json({ message: "Note not found" });
  }
};

exports.createNote = (req, res) => {
  const { title, content } = req.body;

  const newNote = {
    id: db.notes.length + 1,
    title,
    content,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  db.notes.push(newNote);
  saveToDb();

  res
    .status(201)
    .json({ message: "Note created successfully!", note: newNote });
};

exports.updateNote = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const note = db.notes.find((n) => n.id == id);

  if (note) {
    note.title = title;
    note.content = content;
    note.updatedAt = new Date().toISOString();

    saveToDb();
    res.status(200).json({ message: "Note created successfully!", note: note });
  } else {
    res.status(404).json({ message: "Note not found" });
  }
};

exports.patchNote = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const note = db.notes.find((n) => n.id == id);

  if (note) {
    note.title = title;
    note.content = content;
    note.updatedAt = new Date().toISOString();

    saveToDb();
    res.status(200).json({ message: "Note created successfully!", note: note });
  } else {
    res.status(404).json({ message: "Note not found" });
  }
};

exports.deleteNote = (req, res) => {
  db.notes = db.notes.filter((n) => n.id != req.params.id);
  saveToDb();
  res.status(204).end();
};
