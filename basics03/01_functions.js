// function saymyname(){
//     console.log("s");
//     console.log("p");
// }
// saymyname();
// function addtwonumbers(n1,n2){
//     console.log(n1+n2);
// }
// addtwonumbers(1,"2");

function addtwonumbers(n1,n2){
    return n1+n2;
}
const result = addtwonumbers(1,2);
console.log(`Result is : ${result}`)

function loggedIN(username = "rishabh"){
    return `${username} just logged in!!`
}
// console.log(loggedIN())
console.log(loggedIN("shubham"))