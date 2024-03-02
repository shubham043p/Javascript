// // const greetings = "Hello World!"
// // for (const greet of greetings) {
// //     console.log(`each char of greeting is : ${greet}`)
// // }

// const mp = new Map()

// mp.set('IN',"India")
// mp.set('USA',"United States of America")
// mp.set('Fr',"France")
// // console.log(mp)

// // for (const [key,value] of mp) {
// //     console.log(key);
// // }
// console.log(mp.get("IN"));


const myObject = {
    name : "shubham",
    age : "21",
    address : "Bhopal"
}
for (const i in myObject) {   // for in , used in object iteration instead of for of
    // console.log(i);
    console.log(`${i} : ${myObject[i]}`);
}