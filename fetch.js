fetch('myfile.txt')
.then(responeDate =>{
    console.log(responeDate.text());
})
.then(data => console.log(data));