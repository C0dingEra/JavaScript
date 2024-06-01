//Normal object
// let student={
//     name:"Akash",
//     age:16,
//     fee:2100

// }
// console.log(student.age);
//Nested Object(object inside object)

// let students={
//     student1:{
//         name:"Akash",
//         age:16,
//         fee:2100
//     },
//     student2:{
//         name:"Vishal",
//         age:14,
//         fee:2200
//     }
// }
// console.log(students.student1.age);

//destructuring nested object

// let students={
//     student1:{
//         name:"Akash",
//         age:16,
//         fee:2100
//     },
//     student2:{
//         name:"Vishal",
//         age:14,
//         fee:2200
//     }
// }
// let {student2:{fee:newfee}}=students;
// console.log(newfee);

//object inside Array

const Employee=[
    {
        name:"Akash",
        age:50,
        id:1,
        salary:22000
    },
    {
        name:"vishal",
        age:40,
        id:2,
        salary:50000
    },
    {
        name:"Ankit",
        age:25,
        id:3,
        salary:22000
    },
    {
        name:"Raman",
        age:30,
        id:4,
        salary:52000
    }
]

console.log(Employee[3].salary);

//function inside object

const student={
    name:"Raman",
    age:21,
    fee:2100,
    Hello:function(){
        console.log("Hello");
    }
}
student.Hello();






