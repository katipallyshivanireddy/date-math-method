// 1. Creating a Date Object
// To use date methods, you first need to create a Date object:

// let date = new Date();

// By default, this creates a Date object representing the current date and time.


let date=new Date();
console.log(date)
console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getDay())



console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toTimeString());
console.log(date.toLocaleTimeString());



// math functions

let a=6.6;
console.log(Math.round(a));
let b=6.5;
console.log(Math.round(b));
let c=12.88;
console.log(Math.ceil(c));
let d=-0.88;
console.log(Math.ceil(d));
let e=123;
console.log(Math.ceil(e))

// Math(floor)

let f=-123.234;
console.log(Math.floor(f))



// math(sqrt)

let g=144;
console.log(Math.sqrt(g))

// math(pow)

let h=12;
console.log(Math.pow(h,3));

let i=12;
console.log(Math.abs(i))


console.log(Math.min(1,2,3,4,5,0))
console.log(Math.max(1,2,3,4,5,0))

console.log(Math.random()*10)
console.log(Math.random()*10)

console.log(Math.trunc(4.9))


// es6 feauters


// arrow functions
const j=()=>console.log("vamsi");
j();
   
// default parameter
function k(x,y,z=100){
    console.log();
}
k(50,100)

// template literals
let m="ravi"
function n(){
    console.log(`hi ${m} how are u`);

}
n()