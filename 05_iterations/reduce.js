// const nums = [1,2,3]

// const total = nums.reduce(function(acc,currVal){
//     console.log(`accumulator : ${acc} and currVal :${currVal}`)
//      return acc + currVal;
// },0)
// const total = nums.reduce(function(acc,currVal){
//     console.log(`accumulator : ${acc} and currVal :${currVal}`)
//      return acc + currVal;
// },3)

// general syntax
// const total = nums.reduce((acc,currVal)=>(acc+currVal),0)
// console.log(total);

const shoppingCart = [
    {
        courseName: "Python Course",
        Price : 1299
    },
    {
        courseName: "Js Course",
        Price : 1099
    },
    {
        courseName: "React Course",
        Price : 299
    },
]

const total = shoppingCart.reduce((acc,item)=>(acc+item.Price),0)
console.log(total);

// .reduce((acc,item)=>(acc+item.price),0) = .recuce(function(acc,item){
    // return acc+item.price
//},0)