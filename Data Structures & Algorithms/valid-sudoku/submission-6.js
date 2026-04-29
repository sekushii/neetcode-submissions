class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowMap = {};
        const columnMap = {};
        const boxMap = {};
        for(let i = 0; i<board.length; i++) {
            const row = board[i];
            for (let j = 0; j<row.length; j++) {
                const value = board[i][j];
                if(value === ".") continue;
                if(!rowMap[i]) rowMap[i] = {};
                if(!columnMap[j]) columnMap[j] = {};
                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if(!boxMap[boxIndex]) boxMap[boxIndex] = {};
                if(rowMap[i][value] || columnMap[j][value] || boxMap[boxIndex][value]) return false;
                else {
                    rowMap[i][value] = true;
                    columnMap[j][value] = true;
                    boxMap[boxIndex][value] = true;
                }

            }
        }

        return true;
    }
}
