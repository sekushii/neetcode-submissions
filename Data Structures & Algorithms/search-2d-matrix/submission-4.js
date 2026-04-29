class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length, columns = matrix[0].length;
        let left = 0, right = (rows * columns) - 1;

        while (left <= right) {
            const mid = Math.floor((right + left)/2);
            const mapped = matrix[Math.floor(mid / columns)][mid % columns];
            if(mapped < target) left = mid + 1;
            else if (mapped > target) right = mid - 1;
            else return true;
        }

        return false;
    }
}
