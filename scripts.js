'use strict';
var arr = [1, -2, 3, 4, -9, 6];

function getMaxSubSum(arr) {
	var maxSum = 0;
	var currentSum = 0;
	
	for (var i = 0; i < arr.length; i++) {
		
		currentSum += arr[i];
		maxSum = Math.max(maxSum, currentSum);
		
		if (currentSum < 0) currentSum = 0;
	}
	
	return maxSum;
}

var maxResult = getMaxSubSum(arr);
console.log(maxResult);