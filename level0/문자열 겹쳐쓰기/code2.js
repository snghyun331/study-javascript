/**
 * @function splice를 사용하여 s번째 인덱스부터 overwrite_string의 길이만큼을 교체한다.
 */

function solution(my_string, overwrite_string, s) {
  const answer = my_string.split("");
  answer.splice(s, overwrite_string.length, overwrite_string);
  return answer.join("");
}
