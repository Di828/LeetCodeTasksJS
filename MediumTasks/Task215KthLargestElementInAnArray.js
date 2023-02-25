var findKthLargest = function(nums, k) {
    let numbersCount = [];
    for (let i = 0; i < nums.length; i++)
    {
        if (numbersCount[nums[i] + 10000]){
            numbersCount[nums[i] + 10000]++;
        } else {
            numbersCount[nums[i] + 10000] = 1;
        }
    }

    for (let i = numbersCount.length - 1; i > 0; i--){
        k -= numbersCount[i] || 0;
        if (k <= 0){
            return i - 10000;
        }
    }

    return numbersCount[0];
};