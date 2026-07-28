class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let storage = {};

        for (let i = 0; i < nums.length; i++) {
            if (storage[nums[i]] != undefined) {
                if (i > storage[nums[i]]) {
                    return [storage[nums[i]], i];
                }
                return [i, storage[nums[i]]];
            }
            storage[target - nums[i]] = i;
        }
    }
}
