const solution = (progresses, speeds) => {
  let complete = 0;
  let result = [];
  for (;;) {
    let count = 0;
    if (progresses.every((progress) => progress >= 100)) {
      break;
    }
    progresses = progresses.map((progress, index) => {
      if (progress >= 100) {
        return progress;
      }
      return progress + speeds[index];
    });
    for (; progresses[complete] >= 100; complete++) {
      count++;
    }
    count && result.push(count);
  }
  return result;
};

// 다른 사람의 풀이
function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
