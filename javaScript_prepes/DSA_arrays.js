// find out the second largest number in an array

let ar = [11, 54, 34, 56, 75, 12, 90, 18];
const secondLargest = (arr) => {
  let largestNum = arr[0];
  let secondLargest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      secondLargest = largestNum;
      largestNum = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

// console.log(secondLargest(ar));

var twoSum = function (nums, target) {
  let map = new Map();

  for (let index in nums) {
    const pairTarget = target - nums[index];
    if (map.has(pairTarget)) return [index, map.get(pairTarget)];
    map.set(nums[index], index);
  }
};

// console.log(twoSum(ar, 12));

// missing sum in an array

var missingNumber = function (nums) {
  let missingSum = 0;
  let correctSum = 0;

  for (let i = 0; i < nums.length + 1; i++) {
    correctSum = correctSum + i;

    if (nums[i]) {
      missingSum += nums[i];
    }
  }
  return correctSum - missingSum;
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
