//slice--> create or return new array
// syntax
// a.slice(startIndex,endIndex)

// const a=[4,5,8,9,12];
// const returnedValue=a.slice(-3);
// console.log(returnedValue);





//splice--> not create new array
//syntax
// arr.splice(index,howManyElementDelete,newValue)

// const a=[4,5,8,21];
// a.splice(1,3,"Akash");
// console.log(a);






// note:you can also delete any element without adding new one
//syntax
// arr.splice(index,howManyElementDelete)

const a=[4,5,8,21];
a.splice(1,2);
console.log(a);