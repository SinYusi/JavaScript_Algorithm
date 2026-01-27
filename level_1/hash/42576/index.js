var solution = (participant, completion) =>
  participant.find(
    (p) => !completion[p]--,
    completion.map((c) => (completion[c] = (completion[c] | 0) + 1))
  );
