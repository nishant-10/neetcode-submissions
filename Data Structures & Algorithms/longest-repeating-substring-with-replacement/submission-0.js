class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0; //we'll control left pointer
        //length of the char with max appearence in current window
        let maxFreq = 0;
        let maxLength = 0; //max length window size, we return this

        let count = new Map(); //freq counter- {char=>count,...}

        //for loop controlls right, because right expands
        //regardless window is  shirking or not
        for (let right = 0; right < s.length; right++) {
            //current char
            const char = s[right];
            //count set/update for currect char
            count.set(char, (count.get(char) || 0) + 1);
            //check which char has max freq
            //current char's count or some previous high value
            maxFreq = Math.max(maxFreq, count.get(char));

            //check if replaceable chars exceed allowed relpacements
            //replaceable chars = window length - maxFreq
            //ex- if left 0 and right -3 for AAAX
            //window length = 4 and maxFreq = 3(3xA> 1xX): 4-3=1
            //so replaceable chars are 1, check that with k
            //while loop checks for invalid window where
            //replaceable chars > allowed replacements
            while (right - left + 1 - maxFreq > k) {
                //decrement the count of char on left as
                //we are moving next to it
                count.set(s[left], count.get(s[left]) - 1);
                //move left
                left++;
                //repeat this till we have a substring with allowed
                //number of replacements
            }
            //this part is to check maxLength, which could be
            //this window size or some previous larger window
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    }
}
