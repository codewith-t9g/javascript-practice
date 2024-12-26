let emp = {};

emp.name = "John";

console.log(Object.getOwnPropertyDescriptor(emp,"name"));

Object.defineProperties(emp, "age",
    {
        value: 30,
        writable: true,
        enumerable: true,
        configurable: true
})

delete emp.age;

console.log(Object.getOwnPropertyDescriptor(emp, "age"));
