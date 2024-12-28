class User{
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log(`Hello, I am ${this.name}`);
    }
}
let user = new User('John');
user.sayHi(); // Hello, I am John
console.log(User.prototype.sayHi);
