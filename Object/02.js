//syntax
// for (variable in object)
//     statement


let car={
    name:"Mercedes Amg",
    price:"1.2 crore"
}
// console.log(car);
// for(x in car){
//     console.log(car[x]);
// }

//Object.values()
// Object.keys()

// const carValue=Object.values(car)
// console.log(carValue);  //array

// for(x of carValue){
//     console.log(x);
// }

const carKey=Object.keys(car);
console.log(carKey);
for(x of carKey){
    console.log(car[x])
}

