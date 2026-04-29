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
        for(let i=0;i<s2.length;i++){
            for(let j=i+1;j<=s2.length;j++){
                const substr = s2.slice(i,j)
                if(substr.length === s1.length) {
                    console.log(s1)
                    console.log(substr)
                    let charmap = new Array(26).fill(0)
                    for(let i=0;i<substr.length;i++){
                        charmap[this.getCode(substr[i])]++
                        charmap[this.getCode(s1[i])]--
                    }
                    console.log(charmap)
                    if(charmap.every(c => c==0)) return true;
                }
            }
        }
        return false;
    }
}
