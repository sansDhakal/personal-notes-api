const express = require("express");
const router = express.Router();
const validateNoteInput = require("../middleware/validateNoteInput");
const noteController = require("../noteControllers/noteController");

router.get("/", noteController.getAllNotes);
router.get("/:id", noteController.getNoteById);
router.post("/", validateNoteInput, noteController.createNote);
router.put("/:id", validateNoteInput, noteController.updateNote);
router.delete("/:id", noteController.deleteNote);
router.patch("/:id", validateNoteInput, noteController.patchNote);
module.exports = router;
