var fs = require('fs');
var md5 = require("md5");
var bruteForce = require("node-bruteforce");

var hashFile = process.argv[2];
if (!hashFile || hashFile.indexOf('.txt') === -1) {
  throw "This program requires a .txt file to run.";
}

var charSet = 'abcdefghijklmnopqrstuvwxyz'.split('');

fs.readFile(__dirname + '/' + hashFile, 'utf-8', (err, data) => {
  if (err) throw err;
  data = data.split('\n');

  console.log("Cracking passwords...");
  data.forEach(hash => {
    if (hash) {
      crack(hash);
    }
  });
});


function crack(hash) {
  bruteForce(charSet, function(value){
    if ( hash === md5(value) ) {
        console.log(hash + ": " + value);
        return true;
    }
    return false;
  });
}
