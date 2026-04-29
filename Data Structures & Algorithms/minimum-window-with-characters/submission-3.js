class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */

    minWindow(s, t) {
        if(s == "") return "";
        const needMap = {}, hasMap = {};
        let shortest = "", l=0, r=0, got=0;
        for(let i = 0; i<t.length; i++) needMap[t[i]] = ((needMap[t[i]] ?? 0) + 1);
        let need = Object.keys(needMap).length;

        while (r < s.length) {
            if(needMap[s[r]]) {
                hasMap[s[r]] = (hasMap[s[r]] ?? 0) + 1;
                if (needMap[s[r]] === hasMap[s[r]]) {
                    got += 1;
                }
            }
            r++
            if(got === need) {
                while(got === need) {
                    if(got===need) {
                        shortest = shortest.length && shortest.length < r-l ? shortest : s.slice(l,r)
                    }
                    if(hasMap[s[l]]) {
                        hasMap[s[l]] -=1;
                        if (hasMap[s[l]] < needMap[s[l]]) {
                            got--
                        }
                    }
                    l++
                }
                
            }
        }
 
        return shortest;
    }
}
