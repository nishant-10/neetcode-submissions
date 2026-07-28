class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let num_map = new Set();
        for (let i = 0; i < nums.length; i++) {
            if (num_map.has(nums[i])) {
                return true;
            } else {
                num_map.add(nums[i])
            }
        }
        return false;
    }
}
