//module 12
//function

// function sum(a,b,c){
//     let sum=a+b+c;
//     return sum;
// }
// let result=sum(10,20,30);
// console.log(result);

// function kayyeEvenHai(number){
//         if(number%2==0){
//             console.log("Number is even");
//         }
//         else{
//             console.log("number is odd");
//         }
// }

// kayyeEvenHai(19);

// function kayyeEvenHai(number){
//     if(number%2==0){
//         return 1;
//     }
//     else{
//         return -1;
//     }
// }
// let result=kayyeEvenHai(11);
// console.log(result);

//find target

function searchTarget(array,key){
        for(let i=0;i<array.length;i++){
            if(array[i]==target){
                return i;
            }
            
        }

}
const arr=[10,20,50,40,11];
let target=11;
let result=searchTarget(arr,target)
console.log(result);
