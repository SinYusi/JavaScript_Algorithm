function solution(name) {
  const n = name.length;
  let vertical = 0;
  const positions = [];

  for (let i = 0; i < n; i++) {
    const c = name.charCodeAt(i) - 65;
    vertical += Math.min(c, 26 - c);
    if (name[i] !== "A") positions.push(i);
  }

  if (positions.length === 0) return 0;

  let horizontal = positions[positions.length - 1];
  horizontal = Math.min(horizontal, n - positions[0]);

  for (let i = 0; i < positions.length - 1; i++) {
    horizontal = Math.min(horizontal, 2 * positions[i] + n - positions[i + 1]);
  }

  for (let i = 1; i < positions.length; i++) {
    horizontal = Math.min(
      horizontal,
      2 * (n - positions[i]) + positions[i - 1]
    );
  }

  return vertical + horizontal;
}
