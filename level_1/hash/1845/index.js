function solution(nums) {
  let limit = nums.length / 2;
  let uniqueNums = [...new Set(nums)];
  return uniqueNums.length > limit ? limit : uniqueNums.length;
}
