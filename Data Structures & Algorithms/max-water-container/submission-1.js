class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        if (heights.length <= 1) return 0;
        // if (heights.length === 1) return heights[0];
        let max_area = 0;
        let left = 0;
        let right = heights.length - 1;
        // for (let i = 0; i < heights.length - 1; i++) {}
        while (left < right) {
            let left_height = heights[left];
            let right_height = heights[right];

            let area = 0;
            let height = 0;
            let width = right - left;
            if (left_height < right_height) {
                height = left_height;
            } else {
                height = right_height;
            }

            area = height * width;
            if (area > max_area) {
                max_area = area;
            }
            if (left_height < right_height) {
                left++;
            } else {
                right--;
            }
        }
        return max_area;
    }
}
