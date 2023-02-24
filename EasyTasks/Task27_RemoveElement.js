var removeElement = function(nums, val) {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;

    while (leftIndex <= rightIndex){
        if (nums[leftIndex] === val){
            while (nums[rightIndex] === val){
                rightIndex--;
                if (rightIndex < leftIndex){
                    return leftIndex;
                }
            }

            nums[leftIndex] = nums[rightIndex];
            leftIndex++;
            rightIndex--;
        } else {
            leftIndex++;
        }        
    }

    return leftIndex;
};