// // function saymyname(){
// //     console.log("s");
// //     console.log("p");
// // }
// // saymyname();
// // function addtwonumbers(n1,n2){
// //     console.log(n1+n2);
// // }
// // addtwonumbers(1,"2");

// function addtwonumbers(n1,n2){
//     return n1+n2;
// }
// const result = addtwonumbers(1,2);
// console.log(`Result is : ${result}`)

// function loggedIN(username = "rishabh"){
//     return `${username} just logged in!!`
// }
// // console.log(loggedIN())
// console.log(loggedIN("shubham"))

// function calculateCartPrice(...num1){
//     return num1;
// }

// console.log(calculateCartPrice(100,200,200,300));

// function r(val1,val2,...num1){
//     return num1;
// }
// console.log(r(1,2,2,3,3,4,45))

const customer = {
    username: "shubham",
    age:"19"
}

function UserDetail(user){
    console.log(`username is ${user.username} and age is ${user.age}`)
}

UserDetai(customer);