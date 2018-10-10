console.log("Starting app.js");
const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const notes = require("./notes.js");

let filteredArray = _.uniq(["Edem", 1, "Edem", 1, 2]);
console.log(filteredArray);
// console.log(_.isString(true));
// console.log(_.isString("Edem"));

// let user = os.userInfo();
// console.log(`Result will be:`, notes.add(5, 5));

// fs.appendFile(
//   "greetings.txt",
//   `Hello ${user.username}!, you are ${notes.age} years old.`,
//   function(err) {
//     if (err) {
//       console.log("Unable to write to file");
//     }
//   }
// );
