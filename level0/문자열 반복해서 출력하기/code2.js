/* repeat 함수 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const [str, n] = line.split(" ");
  console.log(str.repeat(n));
}).on("close", function () {});
