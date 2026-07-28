class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""
        for (let str of strs) {
            res = res + str.length + '#' + str
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let arr = [];

        for (let i = 0; i < str.length; i++) {
            let num = "";

            // 1. build the full number (could be multiple digits)
            while (str[i] !== "#") {
                num += str[i];
                i++;
            }

            let length = parseInt(num);

            // move past '#'
            i++;

            // 2. read exactly `length` characters
            let element = "";
            for (let j = 0; j < length; j++) {
                element += str[i + j];
            }

            arr.push(element);

            // 3. move i to end of current word
            i = i + length - 1;
        }

        return arr;
    }
}
