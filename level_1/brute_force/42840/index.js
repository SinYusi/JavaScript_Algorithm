const solution = (answers) => {
  const answer = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [0, 0, 0];

  answers.forEach((a, index) => {
    if (a === answer[0][index % answer[0].length]) {
      scores[0]++;
    }
    if (a === answer[1][index % answer[1].length]) {
      scores[1]++;
    }
    if (a === answer[2][index % answer[2].length]) {
      scores[2]++;
    }
  });

  const maxScore = Math.max(...scores);

  return scores
    .map((score, index) => {
      if (score === maxScore) {
        return index + 1;
      }
    })
    .filter(Boolean);
};

// 다른 사람 풀이
function solution(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}
