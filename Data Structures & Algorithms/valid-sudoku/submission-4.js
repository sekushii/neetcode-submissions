class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let row = Array.from({ length: 9 }, () => new Array(9).fill(false));
        let column = Array.from({ length: 9 }, () => new Array(9).fill(false));
        let box = Array.from({ length: 9 }, () => new Array(9).fill(false));

        for(let i = 0; i < 9; i++) {
            for(let j = 0; j < 9; j++) {
                let cell = board[i][j];
                if(cell == ".") continue;
                let n = cell - 1;

                if(row[i][n]) return false;
                else row[i][n] = true;

                if(column[j][n]) return false;
                else column[j][n] = true;

                if(box[Math.floor(i / 3) * 3 + Math.floor(j / 3)][n]) return false;
                else box[Math.floor(i / 3) * 3 + Math.floor(j / 3)][n] = true;
            }
        }

        return true;
    }
}
