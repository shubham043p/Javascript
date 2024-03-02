const languages = ["cpp","java",'c','python']

// languages.forEach(function(val){
//     console.log(val);
// })

// function print(val){
//     console.log(val);
// }

// languages.forEach(print) // yahan ab print reference ke through pass krna hai na ki execute kr den hai print() matlb execute and print only is reference to the function


// languages.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// });

const myObject = [
    {
        filename: "java",
        file :"j"
    },
    {
        filename: "c",
        file :"c"
    },
    {
        filename: "c",
        file :"c"
    }
]
myObject.forEach((element) => {
    console.log(element.file);
});