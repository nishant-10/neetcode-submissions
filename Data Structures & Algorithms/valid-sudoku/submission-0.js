class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < 9; i++) {
            let row_hash = new Set();

            for (let j = 0; j < 9; j++) {
                if (board[i][j] !== ".") {
                    if (row_hash.has(board[i][j])) {
                        return false;
                    } else {
                        row_hash.add(board[i][j]);
                    }
                }
            }
        }
        for (let i = 0; i < 9; i++) {
            let col_hash = new Set();

            for (let j = 0; j < 9; j++) {
                if (board[j][i] !== ".") {
                    if (col_hash.has(board[j][i])) {
                        return false;
                    } else {
                        col_hash.add(board[j][i]);
                    }
                }
            }
        }
        for (let startRow = 0; startRow < 9; startRow += 3) {
            for (let startCol = 0; startCol < 9; startCol += 3) {
                let boxHash = new Set();

                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        const value = board[startRow + i][startCol + j];

                        if (value !== ".") {
                            if (boxHash.has(value)) {
                                return false;
                            }

                            boxHash.add(value);
                        }
                    }
                }
            }
        }

        return true;
    }
}
