function FirsttwoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

function SeconedtwoSum(nums, target) {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }
}

function ThirdtwoSum(nums, target) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  let left = 0;
  let right = sortedNums.length - 1;

  while (left < right) {
    const sum = sortedNums[left] + sortedNums[right];
    if (sum === target) {
      return [
        nums.indexOf(sortedNums[left]),
        nums.lastIndexOf(sortedNums[right]),
      ];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}
