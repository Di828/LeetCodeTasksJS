var convertToTitle = function(columnNumber) {
    let result = '';
    while (columnNumber > 0){
        result = String.fromCharCode((columnNumber - 1) % 26 + 65) + result;
        columnNumber = (columnNumber - columnNumber % 26) / 26;
        columnNumber -= result[0] == 'Z'? 1 : 0;
    }    

    return result;
};