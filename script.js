var sortedArr = new Array();

function getDuplicates(arr) {
if(arr.constructor !== Array) {
 throw new TypeError("This is not an Array");
}
else {
  arr.sort();
for(i = 0, length = arr.length; i < length; i++ ) {
  if(typeof arr[i] !== 'number' ) {
   throw new TypeError("This is not an Integer");
  }
  else if(arr[i] === arr[i-1] && arr[i] !== arr[i-2]) {
  sortedArr.push(arr[i]);
  }
}
  sortedArr.sort();
}
}

var Arr = [1 , 2  , 3 , 1 , 2 , 3 , 3 , 2];

getDuplicates(Arr);

console.log(sortedArr);
