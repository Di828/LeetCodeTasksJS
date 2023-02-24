var majorityElement = function(nums) {
    let count = 0;
    let element;
    for (let i = 0; i < nums.length; i++){
        if (count == 0){
            element = nums[i];
        }

        count += element == nums[i] ? 1 : -1;
    }

    return element;
};