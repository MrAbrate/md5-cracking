var md5 = require("md5");

if (!process.argv[2]) {
  throw "This program requires a string to encrypt."
}
var input = process.argv[2];

console.log(input + " =>");
console.log(md5(input));
