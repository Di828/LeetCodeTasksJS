var sumNumbers = function(root) {
    let sum = 0,
        sumToLeaf = 0;
    
    findSumToLeaf(root);    
        
    return sum;

    function findSumToLeaf(root){
        sumToLeaf += root.val;
        if (root.left == null && root.right == null){
            sum += sumToLeaf;
            return;
        }

        if (root.left){
            sumToLeaf *= 10;
            findSumToLeaf(root.left);
            sumToLeaf -= root.left.val;
            sumToLeaf /= 10;
        }

        if (root.right){
            sumToLeaf *= 10;
            findSumToLeaf(root.right);
            sumToLeaf -= root.right.val;
            sumToLeaf /= 10;
        }        
    }
};