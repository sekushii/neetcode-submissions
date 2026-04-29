class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length===0)return "empty"
        return strs.reduce((final, s, i) => {
            if(i == strs.length-1) final += s
            else final += s + "な" + i + "な";
            return final;
        }, "")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
        if(str==="empty")return []
        return str.split(/な[0-9]+な/);
    }
}
