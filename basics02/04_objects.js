// // const tinderuser = {}
// // console.log(tinderuser);
// // tinderuser.firstname = "shubham";
// // tinderuser.age = 19;
// // console.log(tinderuser);

// const user = {
//     regularuser : {
//            firstname:{
//             name: "shubham",
//             batch : 2026
//            }
//     }
// }
// console.log(user.regularuser)
// console.log(user.regularuser.firstname)

// const obj1 = {1:"shubham",2:"panwar"};
// const obj2 = {3:"2026",4:"batch"};
// // const obj3 = Object.assign({},obj1,obj2);
// const obj3 = {...obj1,...obj2};

// console.log(obj3);

const arr = [{name:"shubham",lastname:"panwar"},{place:"bhopal"}];
console.log(arr[0]);
const tinderuser = {}
tinderuser.firstname = "shubham";
tinderuser.lastname=  "panwar";
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty("firstname"));