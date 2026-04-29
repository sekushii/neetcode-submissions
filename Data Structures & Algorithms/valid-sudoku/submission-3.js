class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        //rows
        for(let i = 0; i<board.length;i++){
            let row = new Array(9).fill(false);
            for(let j = 0; j<board[i].length;j++){
                let sqr = board[i][j];
                if(sqr === ".") continue;
                if(row[sqr]) {
                    return false;}
                else row[sqr] = true;
            }
        }
        //columns
        for(let i = 0; i<board.length;i++){
            let column = new Array(9).fill(false);
            for(let j = 0; j<board[i].length;j++){
                let sqr = board[j][i];
                if(sqr === ".") continue;
                if(column[sqr]) return false;
                else column[sqr] = true;
            }
        }
        //subbox
        for (let boxRow = 0; boxRow < 9; boxRow += 3) {
            for (let boxCol = 0; boxCol < 9; boxCol += 3) {
                let sb = new Array(9).fill(false);
                for (let r = 0; r < 3; r++) {
                    for (let c = 0; c < 3; c++) {
                        let sqr = board[boxRow + r][boxCol + c];
                        if(sqr === ".") continue;
                        if(sb[sqr]) return false;
                        else sb[sqr] = true;
                    }
                }

        }
    }

        return true;
    }
}
