/* 정규식 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = [...line];
}).on("close", () => {
  const regex = /[a-z]/;
  console.log(input.map((char) => (regex.test(char) ? char.toUpperCase() : char.toLowerCase())).join(""));
});

// 테스트 1 〉	통과 (73.36ms, 32.1MB)
// 테스트 2 〉	통과 (60.03ms, 32.2MB)
// 테스트 3 〉	통과 (66.64ms, 32.2MB)
// 테스트 4 〉	통과 (69.99ms, 32.3MB)
