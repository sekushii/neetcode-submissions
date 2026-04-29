class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    binarySearch(arr,targ) {
        let l = 0, r = arr.length-1;

        while(l<=r) {
            let i = Math.floor((r+l)/2);
            let curr = arr[i];

            if(curr > targ) r = i-1
            else if (curr < targ) l = i+1
            else return true
        }

        return false;
    }

    searchMatrix(matrix, target) {
        let u = 0, d = matrix.length-1;
        while (u<=d) {
            let i = Math.floor((d+u)/2);
            let curr = matrix[i];
            if(curr[0] > target && curr[curr.length -1] > target) d = i-1
            else if(curr[0] < target && curr[curr.length -1] < target) u = i+1
            else return this.binarySearch(curr, target)
        }

        return false
    }
}
