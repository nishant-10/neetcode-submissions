class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const leftMax = new Array(height.length);

        leftMax[0] = height[0];

        for (let i = 1; i < height.length; i++) {
            leftMax[i] = Math.max(leftMax[i - 1], height[i]);
        }

        const rightMax = new Array(height.length);

        rightMax[height.length - 1] = height[height.length - 1];

        for (let i = height.length - 2; i >= 0; i--) {
            rightMax[i] = Math.max(rightMax[i + 1], height[i]);
        }

        let water = 0;
        for (let i = 0; i < height.length; i++) {
            water += Math.min(leftMax[i], rightMax[i]) - height[i];
        }

        return water;
    }
}
