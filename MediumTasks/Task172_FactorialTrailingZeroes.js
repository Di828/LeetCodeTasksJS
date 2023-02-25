var trailingZeroes = function(n) {
    let powOfFive = 5;
    let result = 0;
    while (powOfFive <= n){
        result += Math.floor(n / powOfFive);
        powOfFive *= 5;
    }

    return result;
};