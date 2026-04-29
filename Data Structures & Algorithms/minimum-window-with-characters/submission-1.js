class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    charCode(c) {
        return c.toLowerCase() === c ? c.charCodeAt() - "a".charCodeAt() :
        c.charCodeAt() - "A".charCodeAt + 25
    } 
    minWindow(s, t) {
        // const map = new Array(52).fill(0);
        const map = {};
        let shortest = "";
        // for(let i = 0; i<t.length; i++) map[this.charCode(t[i])] += 1;
        for(let i = 0; i<t.length; i++) map[t[i]] = map[t[i]] ? map[t[i]] + 1 : 1;
 
        for(let i=0;i<s.length;i++){
            for(let j=i+1;j<=s.length;j++){
                if(j-i<t.length) continue;
                if(shortest && shortest.length<=j-i) continue;
                let k = 0;
                let substr = s.slice(i,j);
                // let table = Array.from(map);
                let dummy = structuredClone(map)
                while(k<substr.length) {
                    // table[this.charCode(substr[k])] -= 1;
                    if(dummy[substr[k]]) dummy[substr[k]] -= 1;
                    k++;
                }
                console.log(i,j,substr,dummy,shortest, dummy)
                // if(table.every(c => c===0)) shortest = substr;
                if(Object.values(dummy).every(c => c===0)) shortest = substr;
            }
        }
        return shortest;
    }
}
