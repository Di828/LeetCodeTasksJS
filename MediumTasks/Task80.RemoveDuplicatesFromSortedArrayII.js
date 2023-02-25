var removeDuplicates = function(nums) {
    let currentNumber = nums[0];
    let currentCount = 1;
    let result = nums.length;
    for (let i = 1; i < nums.length; i++){
        if (nums[i] == currentNumber){
            currentCount++;
        } else {
            currentNumber = nums[i];
            currentCount = 1;
        }

        if (currentCount > 2){
            result--;
            nums[i] = 1000000;
        }
    }
    
    nums.sort((a, b) => (a - b));
    return result;
};