let input = prompt("Enter values for the array, separated by commas (e.g., 1,2,3):");

// Split the input string into an array using commas as the delimiter
let arr1 = input.split(",");
 let arr = arr1.map(element => parseInt(element));
function incrementArray(arr) {
  //your code here  
	for(let i=0;i<arr.length;i++){
		arr[i]=arr[i]+1;
	}
	return arr;
}

alert(incrementArray(arr));
