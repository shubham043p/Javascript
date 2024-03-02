// for each can't return value that's why we use filter

const nums = [1,2,3,4,5,6,7]

// const values = nums.filter((num)=>{
//     return num < 4;
// })

const value = []
nums.forEach((num)=>{
    if(num>4){
        value.push(num)
    }
})
console.log(value);

// *********IMPORTANT********
// SCOPE({}) me return ka use krna hai
// () me return nahi kroge toh v automatically return ho jayega