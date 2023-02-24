var missingNumber = function(nums) {
    let index = 0;
    nums[nums.length] = -1;    
    while (index < nums.length){        

        if (nums[index] == index || nums[index] == -1){
            index++;
            continue;
        }
        
        [nums[nums[index]], nums[index]] = [nums[index], nums[nums[index]]];
    }

    for (let i = 0; i < nums.length; i++){
        if (nums[i] == -1){
            return i;
        }
    }
};