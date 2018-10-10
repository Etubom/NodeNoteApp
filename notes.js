console.log("Starting notes.js");

//node has access to an internal var called module
// console.log(module);
module.exports.age = 10;

module.exports.add = (a, b) => {
  return a + b;
};
