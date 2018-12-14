const {formatDate} = require("./format-date");
const {parse} = require("ini");

console.log(formatDate(new Date(2017, 9, 13),
    "dddd the Do"));

console.log(parse("x=10\ny=20"));