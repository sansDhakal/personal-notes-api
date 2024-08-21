# personal-notes-api
RESTful API to manage personal notes

API Endpoints
GET /notes : Retrieve all notes.
GET /notes/:id : Retrieve a specific note by ID.
POST /notes: Add a new note with a title, content.
PUT /notes/:id : Update a specific note by ID.
PATCH /notes/:id : Patch a specific note by ID.
DELETE /notes/:id : Delete a specific note by ID.

Handle error and validate input.
Created or updated notes must have both title and content.
Notes are stored locally in a JSON file.

