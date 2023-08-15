function threeSum(arr, target) {
// write your code here
	let arr2 = []; 
	let start = 0; 
	for(let i = 0; i<arr.length; i++){
		for(let j = i+1, j<arr.length; j++){
			for(let k = j+1; k<arr.length; k++){
				arr2[start] = arr[i]+arr[j]+arr[k]; 
				start++; 
			}
		}
	}
	let arr3 = []; 
	let start2 = 0; 
	for(let i = 0; i<arr2.length; i++){
		let max = Math.max(target, arr2[i]); 
		let min = Math.min(target, arr2[i]); 
		arr3[start2] = max - min; 
		start2++; 
	}
	let minimum = Number.MAX_VALUE;  
	for(let i = 0; i< arr3.length; i++){
		if(arr3[i] < minimum){
			minimum = arr3[i]; 
		}
	}
	let indx = 0; 
	for(let i = 0; i<arr3.length; i++){
		if(minimum == arr3[i]){
			indx = i; 
		}
	}
	return arr2[indx]; 
}

module.exports = threeSum;
