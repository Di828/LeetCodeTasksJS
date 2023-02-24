var hammingDistance = function(x, y) {
    return [...(x ^ y).toString(2).matchAll(1)].length
};