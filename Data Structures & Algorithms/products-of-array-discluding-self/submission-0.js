class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = [];
        prefix[0] = 1;
        for (let i = 1; i < nums.length; i++) {
            prefix.push(prefix[i - 1] * nums[i - 1])
        }

        let suffix = [];
        suffix[nums.length - 1] = 1;
        for (let i = nums.length - 2; i >= 0; i--) {
            suffix[i] = (suffix[i + 1] * nums[i + 1])
        }

        let answer = [];
        for (let i = 0; i < nums.length; i++) {
            answer[i] = prefix[i] * suffix[i]
        }

        return answer;
    }
}
