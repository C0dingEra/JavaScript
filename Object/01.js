//Module -11 --------------> Object

//reference type
//store key value pair
//object don't have index

//creating object
// let car={
//     Name:"Mercedes AMG",
//     price:"2 crore",
//     "fuel type":"Petrol",
//     color:["black","blue","Red"],
// }
// console.log(car);


//access data from object
// let car={
//         Name:"Mercedes AMG",
//         price:"2 crore",
//         "fuel type":"Petrol",
//         color:["black","blue","Red"],
//     }

// two ways
// 1)dot notation
// console.log(car.Name);

// 2)bracket notation
// console.log(car["fuel type"]);


//Add key value pair
// let car={
//     Name:"Mercedes AMG",
//     price:"2 crore",
//     "fuel type":"Petrol",
//     color:["black","blue","Red"],
// }
// car["top speed"]="318km";
// console.log(car);


//remove/delete key value pair
// let car={
//     Name:"Mercedes AMG",
//     price:"2 crore",
//     "fuel type":"Petrol",
//     color:["black","blue","Red"],
// }
// console.log(car);
// delete car.price;
// console.log(car);

//hasOwnProperty
let car={
    Name:"Mercedes AMG",
    price:"2 crore",
    "fuel type":"Petrol",
    color:["black","blue","Red"],
}
console.log(car.hasOwnProperty("price"));


