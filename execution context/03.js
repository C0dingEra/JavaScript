console.log("Start");
function greet() {
    console.log("Hello, World!");
}
setTimeout(() => {
    console.log("Inside setTimeout");
}, 2000);
greet();
console.log("End");
