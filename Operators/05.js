
//two numbers

// const a=5;
// const b=8;
// // (a>b)?console.log(`the maximum among these two is ${a}`):console.log(`the maximum among these two is ${b}`);
// const c=(a>b)?a:b;
// console.log(`the maximum number is ${c}`);

//three numbers
let num1=5;
let num2=33;
let num3=9;
let result=(num1>num2)?(num1>num3)?num1:num3 : (num2>num3)?num2:num3;
console.log(`the maximum among these three is ${result}`);

//task
// let a=25;
// let b=29;
//let c=20;

//solution
let a=25;
let b=29;
let c=20;
let ans=(a>b)?(a>c)?a:b:(b>c)?b:c;
console.log(ans);