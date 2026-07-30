class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        while (stones.length > 1) {
            // Sort ascending
            stones.sort((a, b) => a - b);

            // Remove the two largest
            const stone1 = stones.pop();
            const stone2 = stones.pop();

            const diff = stone1 - stone2;

            // If they're different, put the remaining weight back
            if (diff > 0) {
                stones.push(diff);
            }
        }

        return stones.length === 1 ? stones[0] : 0;
    }
}
