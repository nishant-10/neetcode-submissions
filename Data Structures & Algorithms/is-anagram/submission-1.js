class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //if lengths differ its an obvious mismatch
        if (s.length !== t.length) return false;

        //maintain a hashmap for s, as a reference for t
        let s_map = {};
        for (let i = 0; i < s.length; i++) {
            if (!s_map[s[i]]) {
                s_map[s[i]] = 1;
            } else {
                s_map[s[i]]++;
            }
        }

        //loop through t and check if any char !has() in s
        let t_map = {};
        for (let i = 0; i < t.length; i++) {
            //if char from t is not present in s_map it an obvious rejection
            if (!s_map[t[i]]) return false;
            if (!t_map[t[i]]) {
                t_map[t[i]] = 1;
            } else {
                t_map[t[i]] = t_map[t[i]] + 1;
                if (t_map[t[i]] > s_map[t[i]]) {
                    return false;
                }
            }
        }

        //rejection checks passed, return true
        return true;
    }
}
