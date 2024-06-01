//object destructuring
let car={
    carName:"BMW",
    price:"1.2 crore",
    fuelType:"petrol",
    year:2008
}

// let newCarName=car.carName;
// let newPrice=car.price;
// console.log(newCarName);
// console.log(newPrice);

//with destructuring
// let {carName,price,...restProperties}=car;
// console.log(fuelType);
let {carName:newCarName,price:newPrice}=car;
// console.log(restProperties);
console.log(newCarName);