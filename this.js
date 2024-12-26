var obj = {
    "fname":"Kaushik",
    "age":21,
    fun :function(){
        console.log(this.fname);
    }
}
// console.log(obj.fname);
obj.fun()