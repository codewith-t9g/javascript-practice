var obj = {
    fname:"Kaushik",
};

obj2 = Object.create(obj);

obj2.fname = "Rishi";

console.log(obj2.fname);