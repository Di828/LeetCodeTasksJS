var findComplement = function(num) {
    let n = 2;
    while (n <= num){
        n *= 2;
    }

    return n - 1 - num;
};