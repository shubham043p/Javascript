// const user = {
//     username : "shubham",
//     welcomeMessage : function(){
//         console.log(`${this.username} welcome to website!`)
//     }
// }
// // console.log(user.welcomeMessage())
// // console.log(this)
// user.welcomeMessage()
// user.username = "Bhai"
// user.welcomeMessage();

// console.log(this);
// function chai(){
//     console.log(this);
// }
// chai()

// const chai = () => {
//     console.log("chai")
//     console.log(this)
// }
// const coffee = function(){
//     console.log(this);
// }
// chai()
// coffee()

// const calculate = (num1,num2) => {
//     return num1 + num2;
// }
// const mathh = (num1,num2) => (num1 + num2) ; // implicit return
// console.log(calculate(1,2));
// console.log(mathh(1,2));

const hehe = () => ({username: "shubham"})
console.log(hehe());