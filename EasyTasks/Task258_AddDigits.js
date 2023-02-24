var addDigits = function(num) {
    if (num < 10){
        return num;
    }

    let digitsSum = 0;
    while (num > 0){
        digitsSum += num % 10;
        num = (num - num % 10) / 10;
    }

    return addDigits(digitsSum);
};