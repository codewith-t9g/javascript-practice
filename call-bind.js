function fun(){
    console.log(this.fname);
    
}

var obj={
    fname:"Rahul"

}

var obj2={
    fname:"Kenny"
}

fun.call(obj2);