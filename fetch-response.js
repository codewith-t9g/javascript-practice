fetch('https://jsonplaceholder.typicode.com/posts')

.then(response =>{

    if(!response.ok){
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => data.forEach(element => {
    console.log(element.title)
    
}))

.catch(error => console.error(error))