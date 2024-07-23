//find
// const ages=[26,8,26,35];
// function checkAge(age){
//     return age>=21;
// }
// const returnedValue=ages.find(checkAge);  //left to right : output: value
// console.log(returnedValue);


//findIndex
// const ages=[26,8,26,35];
// function checkAge(age){
//     return age>=21;
// }
// const returnedValue=ages.findIndex(checkAge);  //left to right : output: index
// console.log(returnedValue);

//findLast

// const ages=[26,8,26,35];
// function checkAge(age){
//     return age>=21;
// }
// const returnedValue=ages.findLast(checkAge);  //right to left : output: value
// console.log(returnedValue);

//findLastIndex

const ages=[26,8,26,35];
function checkAge(age){
    return age>=21;
}
const returnedValue=ages.findLastIndex(checkAge);  //right to left : output: index
console.log(returnedValue);