Promise.race([
    new Promise((resolve)=>setTimeout(()=>resolve("Task 1 finished"),1000)),
    new Promise((resolve)=>setTimeout(()=>resolve("Task 2 finished"),2000)),
])
.then((results) => {
    console.log(results);

})