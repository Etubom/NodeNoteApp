console.log("Starting notes.js");
const fs = require("fs");

let fetchNotes = () => {
  try {
    let noteString = fs.readFileSync("notes-data.json"); //read already existing notes
    return JSON.parse(noteString); //parse and store already existing note
  } catch (e) {
    return [];
  }
};
let saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes)); //write stringfied notes array to file called 'notes-data.json'
};

let addNote = (title, body) => {
  console.log("Adding note", title, body);
  let notes = fetchNotes();
  let note = {
    title: title,
    body: body
  };

  let duplicateNotes = notes.filter(notes => notes.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};
let getAll = () => {
  console.log("Getting all listings");
};
let getNote = title => {
  console.log("Title being displayed :", title);
};
let removeNote = title => {
  console.log("Node being deleted is: ", title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
