class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        if (nums.length <= 2) return [];
        nums.sort((a, b) => a - b); //1,2,3,4
        let result = [];
        for (let i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            // a, left, right are 3 values of 3 sum
            // a is fixed, left and right move as pointers
            let a = i;
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                let sum = nums[a] + nums[left] + nums[right];

                if (sum > 0) {
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    result.push([nums[a], nums[left], nums[right]]);

                    left++;
                    right--;

                    // Skip duplicate left values
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }

                    // Skip duplicate right values
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }
                }
            }
        }
        return result;
    }
}
