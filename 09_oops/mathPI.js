// const descriptor = Object.getOwnPropertyDescriptor(Math,
// 'PI');
// console.log(descriptor);

const chai = {
    name: "ginger chai",
    price :250,
    isAvailable: true
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// it is writable and enumerable till n ow we have to change it's internal properties

Object.defineProperty(chai,'name',{
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));