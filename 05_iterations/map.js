const nums = [1,2,3,4,5,6,7,8,9]

// const values = nums.map((num)=> num + 4)
// console.log(values)
//  const values = nums.map((num)=> { return num + 4})

const values = nums.
                     map((num)=>num*10).
                     map((num)=>num+1).
                     filter((num)=>num>40)
 console.log(values)