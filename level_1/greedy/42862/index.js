function solution(n, lost, reserve) {
  const newReserve = reserve
    .map((r) => {
      if (lost.includes(r)) {
        lost.splice(lost.indexOf(r), 1);
        return;
      }
      return r;
    })
    .filter(Boolean);
  newReserve
    .sort((a, b) => a - b)
    .forEach((r) => {
      if (lost.includes(r - 1)) {
        lost.splice(lost.indexOf(r - 1), 1);
        return;
      }
      if (lost.includes(r + 1)) {
        lost.splice(lost.indexOf(r + 1), 1);
        return;
      }
      return;
    });
  return n - lost.length;
}

// cursor의 풀이
function solution(n, lost, reserve) {
  const lostSet = new Set(lost);
  const reserveSet = new Set(reserve);

  // 여벌 있는데 도난당한 사람 → 자기 것 써서 제외
  const both = [...reserveSet].filter((r) => lostSet.has(r));
  both.forEach((r) => {
    lostSet.delete(r);
    reserveSet.delete(r);
  });

  const sortedReserve = [...reserveSet].sort((a, b) => a - b);

  for (const r of sortedReserve) {
    if (lostSet.has(r - 1)) lostSet.delete(r - 1);
    else if (lostSet.has(r + 1)) lostSet.delete(r + 1);
  }

  return n - lostSet.size;
}
