class Person{
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log(`Hello + ${this.name}`);
    }

}
let user = new Person("Kaushik");
user.sayHi();
