function threeSum(arr, target) {
// write your code here
	let arr2 = []; 
	let start = 0; 
	for(let i = 0; i<arr.length; i++){
		for(let j = i+1, j<arr.length; j++){
			for(let k = j+1; k<arr.length; k++){
				arr2[start] = arr[i]+arr[j] + arr[k]; 
				start++; 
			}
		}
	}
	console.log(arr2); 
  
}

module.exports = threeSum;
