//keys()
//values()
//entries()

//Array
// const arr=[4,5,7,8,"Akash"];
// for([index,value] of arr.entries()){
//     console.log(index,value);
// }

//object
const obj={
    Name:"Akash",
    roll:14,
    age:25
}
const value=Object.entries(obj);
console.log(value[2][1]);
