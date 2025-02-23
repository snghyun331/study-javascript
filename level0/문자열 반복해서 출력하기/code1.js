/* 정석 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const [str, n] = line.split(" ");
  answer = "";
  for (i = 0; i < n; i++) {
    answer += str;
  }
  console.log(answer);
}).on("close", function () {});
