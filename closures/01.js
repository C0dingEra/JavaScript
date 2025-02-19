//closures

// function outerFunction(){
//     function innerFunction(){
//         console.log("inside outer function")
//     };
//     return innerFunction
// }
// var result=outerFunction()
// console.log(result)
// result()

var name = "Akash singh"
function outerFunction() {
    function innerFunction() {
        console.log(`my name is ${name}`)
    }
    return innerFunction;
}
var func1 = outerFunction()
console.log(func1)
func1()
