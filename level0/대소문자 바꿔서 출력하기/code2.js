/* forEach 함수 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [...line];
  //   [
  //     'a', 'B', 'c',
  //     'D', 'e', 'F',
  //     'g'
  //   ]
}).on("close", function () {
  input.forEach((value, index) => {
    if (value === value.toUpperCase()) {
      input[index] = value.toLowerCase();
    } else {
      input[index] = value.toUpperCase();
    }
  });
  console.log(input.join(""));
});

// 테스트 1 〉	통과 (45.36ms, 32.2MB)
// 테스트 2 〉	통과 (73.80ms, 32MB)
// 테스트 3 〉	통과 (298.49ms, 31.8MB)
// 테스트 4 〉	통과 (45.92ms, 32.2MB)
