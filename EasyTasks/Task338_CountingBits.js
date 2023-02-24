var countBits = function(n) {
    let output = [0];
    let index = 0;
    let diff = 1;
    while (index < n){
        index++;
        output[index] = output[index - diff] + 1;
        if (index >= diff * 2 - 1){
            diff *= 2;
        }
    }

    return output;
}