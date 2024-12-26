var inter = setInterval(fun, 1000);

function fun(){
    let data = new Date().toLocaleDateString();
    console.log(data);
}

setTimeout(()=>{
    clearInterval(inter);
},10000)