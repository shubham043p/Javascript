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

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"shubham",email:"chai@example.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
})