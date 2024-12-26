let id = Symbol("id");

let obj ={
    name : "John",
    age : 21,
   
};

obj[id] = 1;

console.log(obj[id])
