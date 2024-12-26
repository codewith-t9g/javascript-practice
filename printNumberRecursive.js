function printNumberRecursive(n){
if(n<=10){
    console.log(n);
    printNumberRecursive(n+1);
}
}

printNumberRecursive(1)