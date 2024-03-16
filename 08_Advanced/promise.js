// const promiseOne =  new Promise(function(resolve,reject){
//     // Do an async task
//     // DB calls,cryptography,network
//     setTimeout(function(){
//            console.log('Async task is completed!')
//            resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise Consumed")
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("asyn1 is completed")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async2 resolved!")
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve({username:"shubham",email:"chai@example.com"})
//     }, 1000);
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve,reject){
//        setTimeout(() => {
//         let error = false
//         if(!error){
//             resolve({username:"shubham",password:"1234"})
//         }else{
//             reject('ERROR:Something went wrong')
//         }
//        }, 1000);
// })

// promiseFour.then((user)=>{
//      console.log(user)
//      return user.username;
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>{
//     console.log("promise is either resolved or rejected")
// })
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
     let error = true;
     if(!error){
         resolve({username:"shubham",password:"1234"})
     }else{
         reject('ERROR:Something went wrong')
     }
    }, 1000);
})
async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch(error){
        console.log(error);
    }
}
consumePromiseFive()