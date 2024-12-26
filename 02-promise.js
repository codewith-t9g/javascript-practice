Promise.all([
    Promise.resolve("Task 1 completed"),
    Promise.resolve("Task 2 completed"),
    Promise.resolve("Task 3 failed")
])

.then((result)=>console.log(result))
.catch((error)=>console.log(error))