class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length -1;
        let mid = Math.floor((left + right) / 2);
        let count = nums.length;
        while ((left <= right) && count > 0) {
            console.log(mid, left, right)
            if (target > nums[mid]) {
                left = mid +1;
                mid = Math.floor((left + right) / 2);
            } else if (target < nums[mid]) {
                right = mid -1;
                mid = Math.floor((left + right) / 2);
            } else if (target === nums[mid]) {
                return mid;
            }
            count --;
        }
        return -1;
    }
}
