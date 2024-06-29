//Functions in Functions

// function Hello(){
//     console.log("Hello world");
//     function PrintHelloWorldAgain(){
//         console.log("Hello world again");
//     }
//     PrintHelloWorldAgain();
    
// }
// Hello();

//Default Parameters

// function printNum(a,b=30){
//     console.log(a,b);
// }
// printNum(10);

//Rest Parameters
// function sum(a,b,...c){
//     console.log(a+b);
//     console.log(c);
// }
// sum(10,40,50,40,60);

// function sum(...number){
//     let result=0;
//     for(let num of number){
//         result=result+num;
//     }
//     console.log(result);
// }
// sum(10,20,30,10,5,5);

//Parameter Destructuring

let obj={
    firstName:"Akash",
    roll:6,
    id:1
}
function printObj({firstName:newFirstName,roll,id}){
    console.log(newFirstName);
    console.log(roll);
    console.log(id);
}
printObj(obj);

