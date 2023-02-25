var exist = function(board, word) {
    let m = board.length;
    let n = board[0].length;
    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            if (board[i][j] == word[0]){
                if (existFrom(board, word.slice(1), i, j)){
                    return true;
                }
            }
        }
    }

    return false;
};

var existFrom = function(board, word, i, j){
    if (word.length == 0){
        return true;
    }

    let temp = board[i][j];
    board[i][j] = '';
    let directions = [[1, 0],[-1, 0],[0, 1],[0, -1]];
    for (let direction of directions){
        if (isMatch(word[0], board, i + direction[0], j + direction[1])){
            if (existFrom(board, word.slice(1), i + direction[0], j + direction[1])){
                return true;
            }
        }
    }

    board[i][j] = temp;
    return false;
}

var isMatch = function(symbol, board, i, j){
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length){
        return false;
    }

    return symbol == board[i][j];
}