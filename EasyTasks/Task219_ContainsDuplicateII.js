var containsNearbyDuplicate = function(nums, k) {
    let valuesInKRange = new Set();
    for (i = 0; i < nums.length; i++){
        if (valuesInKRange.has(nums[i])){
            return true;
        }

        valuesInKRange.add(nums[i]);
        if (i >= k){
            valuesInKRange.delete(nums[i - k]);
        }
    }

    return false;
};