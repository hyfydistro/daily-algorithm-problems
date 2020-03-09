/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

};

// CONSTRAINTS: DO NOT use the same element twice!

// Compare if the following number matches to add up to the certain target
// This would involce a two dimension field where similar to making a chess board
// If equal to the same element - skip via 'continue;'

const nums = [1, 7, 11, 15];
const target = 9;

var twoSum = function(nums, target) {
  // Loop through the first indices
  for (let i = 0; i < nums.length; i++) {
    let total = 0;
    for (let j = 0; j < nums.length; j++) {
      total = nums[i] + nums[j + 1];

        if (nums[j] === nums[nums.length - 1] && ) {

        }

      if (total === target) {
        return `${nums[i]} + ${num[j + 1]} = ${target}`
      }
    }
  }

};
