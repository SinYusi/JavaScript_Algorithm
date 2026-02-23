function solution(n) {
  let count = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      if (i % 2 === 1) count++;
      const other = n / i;
      if (other !== i && other % 2 === 1) count++;
    }
  }
  return count;
}
