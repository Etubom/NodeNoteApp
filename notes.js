console.log("Starting notes.js");

let addNote = (title, body) => {
  console.log("Adding note", title, body);
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
