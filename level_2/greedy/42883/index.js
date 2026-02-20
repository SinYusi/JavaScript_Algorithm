function solution(number, k) {
  const stack = [];

  for (const digit of number) {
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] < digit) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }

  // 순회 후에도 k가 남아있으면 뒤에서 k개 제거
  if (k > 0) stack.splice(stack.length - k, k);

  return stack.join("");
}
