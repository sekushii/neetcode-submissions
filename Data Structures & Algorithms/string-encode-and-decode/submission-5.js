class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.reduce((final, s) => {
            final += s.length + "な" + s;
            return final;
        }, "")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
        // if(str==="")return []
        let res = []
        for (let i = 0; i<str.length;) {
            let strlength = ""
            while(str[i] !== "な") {
                strlength += str[i]
                i++
            }
            strlength=Number(strlength)
            res.push(str.slice(i+1, i+1+strlength))
            i+=1+strlength
        }
        return res;
    }
}
