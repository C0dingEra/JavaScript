//callback function


// function function1(callback){
//     console.log("I am in function 1");
//     callback();
// }
// function function2(){
//     console.log("I am in function 2");
// }
// function1(function2);

//function returning function

function function1(){
    console.log("I am in function 1");
    function function2(){
        console.log("I am in function 2");
    }
    return function2;
}
const returnedFunction=function1();
returnedFunction();




