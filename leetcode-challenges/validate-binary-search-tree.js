
// My Solution
var isValidBST = function(root) {
  return validate(root);
};

function validate(node, min = null, max = null) {
  if (max !== null && node.val >= max) {
    return false;
  }

  if (min !== null && node.val <= min) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.val)) {
    return false;
  }

  if (node.right && !validate(node.right, node.val, max)) {
    return false;
  }

  return true;
}

// Best Solution
var isValidBST = function(root, min, max) {
  if (!root) return true;

  if (root.val <= min || root.val >= max) return false;

  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};