function func(){
    let c = 1;
    this.a = 100;

}

func.prototype.b = 200;

let obj = new func();

console.log(obj.a); 
console.log(obj.b);