class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0, j = numbers.length-1;
        while(i<j) {
            let n1=numbers[i],n2=numbers[j]
            if(n1+n2 == target) return [i+1,j+1]
            if(n1+n2 > target) j--
            if(n1+n2 < target) i++;
        }
    }
}
