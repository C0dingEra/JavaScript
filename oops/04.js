//super keyword
//super keyword is used to call the constructor of the parent class to access the parent's properties and methods

class Parent{
    constructor(weight){
        console.log("parent constructor");
        this.weight=weight;
    }
    height(){
        console.log("height is 6feet")
    }
}

class Child extends Parent{
    constructor(){
        console.log("child constructor")
        super("80kg")  //invoking parent class constructor
    }
    work(){
        super.height();
        console.log("I can work")
    }

}
let obj=new Child("80kg")
obj.work()