var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let output = 0;

    for (let i = 0; i < nums.length; i++){
        if (set.has(nums[i])){
            output = Math.max(output, lengthOfSeq(set, nums[i]));
        }
    }

    return output;
};

let lengthOfSeq = function(set, num){
    let numLeft = num - 1;
    let numRight = num + 1;
    let length = 1;
    set.delete(num);

    while (set.has(numLeft)){
        length++;
        set.delete(numLeft);
        numLeft--;        
    }

    while (set.has(numRight)){
        length++;
        set.delete(numRight);
        numRight++;        
    }

    return length;
}