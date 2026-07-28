class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // let sort_map = {act:[act,cat],opst:[stop,pots,tops]};
        let sort_map = {};
        for (let str of strs) {
            const sorted_str = str.split("").sort().join("");
            if (sort_map[sorted_str] === undefined) {
                sort_map[sorted_str] = [];
            }
            sort_map[sorted_str].push(str);
        }
        let output = [];
        for (let element in sort_map) {
            output.push(sort_map[element]);
        }

        return output;
    }
}
