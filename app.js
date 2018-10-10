console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");

const notes = require("./notes.js");

let command = process.argv[2]; //node internal object + value holding list of everything provided on the cmd line
console.log("Command: ", command);

if (command === "add") {
  console.log("Adding new note");
} else if (command === "list") {
  console.log("Listing all notes");
} else if (command === "read") {
  console.log("Fetching note");
} else if (command === "remove") {
  console.log("Removing note");
} else {
  console.log("command not recognised");
}
