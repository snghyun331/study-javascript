/**
 * @function substring을 이용하여 문자열을 자르고, 덮어쓰기를 한다.
 */

function solution(my_string, overwrite_string, s) {
  return my_string.substring(0, s) + overwrite_string + my_string.substring(s + overwrite_string.length);
}
