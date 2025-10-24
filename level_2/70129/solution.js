function solution(s) {
  let count = 0;
  let zeroCount = 0;
  while (s !== "1") {
    const newS = s.replace(/0/g, '');
    zeroCount += s.length - newS.length;
    s = newS.length.toString(2);
    count++;
  }
  return [count, zeroCount];
}

module.exports = { solution };
