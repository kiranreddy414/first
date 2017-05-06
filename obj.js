
// var obj1 = {
// 	name: 'kiran',
// 	age : 26,
// 	address:{
// 		street:'7 weed'
// 	}
// }


// var obj2 = {
// 	age : 26,
// 	name: 'kiran',
// 	address:{
// 		street:'7 weed'
// 	}
	
// }

// function deepCompare(obj1,obj2){
// 	if(!(typeof obj1 == 'object' && typeof obj2 == 'object')){
// 		console.log('its not an object')
// 		return obj1 == obj2;
// 	}

// 	for(var prop in obj1){
// 		if(obj1.hasOwnProperty(prop)){
// 			if(obj2.hasOwnProperty(prop)){
// 				if(deepCompare(obj1[prop], obj2[prop])!==true){
// 					return false;
// 				}
// 			}else{
// 				return false;
// 			}
// 		}
// 	}

// 	for(var prop in obj2){
// 		if(obj2.hasOwnProperty(prop)){
// 			if(obj1.hasOwnProperty(prop)){
// 					;
// 			}else{
// 				return false;
// 			}
// 		}
// 	}
// 	return true;
// }

// console.log(deepCompare(obj1,obj2));


// Merge sort

var a=[5,7,1,11,2,3,4];
function mergeSort(arr)
{
	if (arr.length<2)
		return arr;
var mid = parseInt(arr.length/2);
var left = arr.slice(0,mid);
var right = arr.slice(mid, arr.length);
return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
var result=[];
while (left.length && right.length){
	if(left[0]>=right[0])
	{
		result.push(left.shift());
	}else
	{
		result.push(right.shift());
	}
}

while (left.length )
		result.push(left.shift());

while (right.length )
		result.push(right.shift());
	return result;
}
console.log(mergeSort(a));	




//Quick sort

var array = [1,5,48,79,4,8];

 function quicksortBasic(array) {
  if(array.length < 2) {
    return array;
  }

  var pivot = array[0];
  var lesser = [];
  var greater = [];

  for(var i = 1; i < array.length; i++) {
    if(array[i]< pivot) {
      lesser.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return quicksortBasic(greater).concat(pivot, quicksortBasic(lesser));
}

console.log(quicksortBasic(array)); 

// // // swap function helper
// // function swap(array, i, j) {
// //   var temp = array[i];
// //   array[i] = array[j];
// //   array[j] = temp;
// // }

// // // classic implementation (with Hoare or Lomuto partition scheme, you can comment either one method or the other to see the difference)
// // function quicksort(array, left, right) {
// //   left = left || 0;
// //   right = right || array.length - 1;

// //   // var pivot = partitionLomuto(array, left, right); // you can play with both partition
// //   var pivot = partitionHoare(array, left, right); // you can play with both partition

// //   if(left < pivot - 1) {
// //     quicksort(array, left, pivot - 1);
// //   }
// //   if(right > pivot) {
// //     quicksort(array, pivot, right);
// //   }
// //   return array;
// // }
// // Lomuto partition scheme, it is less efficient than the Hoare partition scheme
// // function partitionLomuto(array, left, right) {
// //   var pivot = right;
// //   var i = left;

// //   for(var j = left; j < right; j++) {
// //     if(array[j] <= array[pivot]) {
// //       swap(array, i , j);
// //       i = i + 1;
// //     }
// //   }
// //   swap(array, i, j);
// //   return i;
// // }
// // // Hoare partition scheme, it is more efficient than the Lomuto partition scheme because it does three times fewer swaps on average
// // function partitionHoare(array, left, right) {
// //   var pivot = Math.floor((left + right) / 2 );

// //   while(left <= right) {
// //     while(array[left] < array[pivot]) {
// //       left++;
// //     }
// //     while(array[right] > array[pivot]) {
// //       right--;
// //     }
// //     if(left <= right) {
// //       swap(array, left, right);
// //       left++;
// //       right--;
// //     }
// //   }
// //   return left;
// // }

// // console.log(quicksort(array.slice()));


// function person(na, ag){
// 	this.hello=na;
// 	this.num=ag;
// }	
// var p1 = new person('world',143);
// console.log(p1);

// function Car (desc) {
//     this.desc = desc;
//     this.color = "red";
// }
 
// Car.prototype = {
//     getInfo: function() {
//       return 'A ' + this.color + ' ' + this.desc + '.';
//     }
// };
// //instantiate object using the constructor function
// var car =  Object.create(Car.prototype);
// car.color = "blue";
// alert(car.getInfo()); //displays 'A blue undefined.' ??!




var a ={
	name:'john',
	age : 26,
	address:{
		street:'3004 sw'
	}};


var result;
Object.prototype.myKeys = function(a) 
	{
		var result = [];
		for(var prop in a)
		{ 	
		if(a.hasOwnProperty(prop))
			result.push(prop);
		}

		return result;
	}


console.log(Object.myKeys(a));