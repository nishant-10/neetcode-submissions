class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let result = [];

        let storage = {};

        for (let i = 0; i < nums.length; i++) {
            if (storage[nums[i]] !== undefined) {
                storage[nums[i]]++;
            } else {
                storage[nums[i]] = 1;
            }
        }

        const sortedByFrequency = Object.entries(storage).sort((a, b) => b[1] - a[1]);
        for (let j = 0; j < k; j++) {
            result.push(sortedByFrequency[j][0]);
        }

        return result;
    }
}
