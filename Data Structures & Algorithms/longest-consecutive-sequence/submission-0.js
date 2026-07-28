class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numset = new Set(nums);
        console.log(numset);
        let max = 0;
        for(let num of numset){
            if(!numset.has(num -1)){
              let current = num;
                let length = 1;
                while (numset.has(current + 1)) {
                    current++;
                    length++;
                }
               if(length > max) max = length
                
            }
            
        }
        return max;
    }
}
