/**
 * 내 풀이
 * @function slice를 이용하여 문자열을 잘라서 새로운 문자열을 만들어 반환한다.
 */

function solution(my_string, overwrite_string, s) {
  var answer = "";
  answer += my_string.slice(0, s);
  answer += overwrite_string;
  answer += my_string.slice(s + overwrite_string.length, my_string.length);

  return answer;
}
