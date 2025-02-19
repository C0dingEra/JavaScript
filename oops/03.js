//Inheritance
class Parent{
    height(){
        console.log("height is 6feet")
    }
}

class Child extends Parent{
    height(){
        console.log("height is 7feet")
    }
}
let obj=new Child()
obj.height()

//note:if child and parent has same method then child method will be used.