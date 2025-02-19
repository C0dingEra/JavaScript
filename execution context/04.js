console.log("Start");
setTimeout(() => {
    console.log("Callback from setTimeout");
}, 0);
Promise.resolve().then(() => {
    console.log("Microtask from Promise");
});
console.log("End");
