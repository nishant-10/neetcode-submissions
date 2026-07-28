class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // let max_profit = 0;
        let profit = 0;
        for (let i = 0; i < prices.length - 1; i++) {
            let j = i + 1;
            while (j < prices.length) {
                if (prices[j] > prices[i] && prices[j] - prices[i] > profit) {
                    profit = prices[j] - prices[i];
                }
                j++;
            }
        }
        return profit;
    }
}
