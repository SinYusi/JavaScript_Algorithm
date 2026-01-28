// 처음 생각 (시간 초과)
function solution(arr) {
  return arr
    .map((n, i) => {
      if (n !== arr[i - 1]) return n;
    })
    .filter((n) => n != null);
}

// 위 코드를 압축한 두 번째 생각 (시간초과) (filter 때문이라고 생각)
const solution = (arr) =>
  arr.map((n, i) => n !== arr[i - 1] && n).filter((n) => n !== false);

// 스택 사용
function solution(arr) {
  const answer = [];
  arr.forEach((n, i) => {
    if (arr[i - 1] !== n) answer.push(n);
  });
  return answer;
}

// 다른 사람의 풀이
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}

// 다른 사람의 풀이를 겉멋 들이기
const solution = (arr) => arr.filter((_, $) => _ != arr[$ + 1]);
