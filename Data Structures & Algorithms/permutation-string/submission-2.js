class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    getCode(c) {
        return c.charCodeAt() - "a".charCodeAt()
    }

    checkInclusion(s1, s2) {
        const charmap = {}
        for(let i=0;i<s1.length;i++) charmap[s1[i]] = charmap[s1[i]] ? charmap[s1[i]]+1 : 1;
        let l=0,r=0;

        while(r<s2.length) {
            let rchar = s2[r]
            let lchar = s2[l]
            charmap[rchar] = charmap[rchar] ? charmap[rchar]-1 : -1
            console.log(rchar,lchar,charmap)

            if(Object.values(charmap).every(v => v==0)) return true

            if(r-l+1 < s1.length){
                r++
                continue
            }else{
                charmap[lchar]+=1
                l++
                r++
            }

        }
        return false;
    }
}
