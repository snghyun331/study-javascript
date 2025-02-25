/* 정석 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const input = line;
  let ans = "";
  for (i = 0; i < input.length; i++) {
    if (input[i] === input[i].toUpperCase()) {
      ans += input[i].toLowerCase();
    } else {
      ans += input[i].toUpperCase();
    }
  }
  console.log(ans);
}).on("close", function () {});

// 테스트 1 〉	통과 (49.63ms, 32.4MB)
// 테스트 2 〉	통과 (48.79ms, 32.5MB)
// 테스트 3 〉	통과 (64.29ms, 32.3MB)
// 테스트 4 〉	통과 (71.45ms, 32.3MB)
