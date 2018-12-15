const {readFile} = require("fs").promises;
const {readFileSync} = require("fs");

readFile("file.txt", "utf8").then( text => console.log("The file contains:", text));

console.log("The file contains:", readFileSync("file.txt", "utf8"));