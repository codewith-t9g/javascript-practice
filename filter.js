let num = [10, 20, 35, 19, 25, 60];
let a = num.filter((val, index, array)=>{
    if(val => 1 && val <= 2){
        return val;
    }
})

console.log(a);