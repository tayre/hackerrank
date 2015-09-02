int height(Node root) {
	if(root == null) return 0;
	int left = height(root.left);
	int right = height(root.right);
	return 1 + Math.max(left, right);
}