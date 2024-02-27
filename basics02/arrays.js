// const arr = [1,2,3,4,5];
// console.log(arr[0]);
// const narr = new Array(1,3,5,7);
// // console.log(narr.length);
// // arr.push(12);
// // arr.push(12);
// // console.log(arr.length);
// // arr.pop();
// // console.log(arr.length);
// arr.unshift(12);
// console.log(arr[0]);

const arr = [1,2,3,4,5,6,7,8];
const narr = arr.slice(1,3);
const narr2 = arr.splice(1,3);
console.log(narr);
console.log(arr);
console.log(narr2);