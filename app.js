const getData = (id, nextFunc) =>{
    setTimeout(() => {
    console.log(id);
    if(nextFunc){
    nextFunc()
    }
}, 2000)
}  

// this is called callback hell
getData(1, () => {
    console.log('Added 1...');
    getData(10, () => {
    console.log('Added 10...');
        getData(100, () => {
    console.log('Added 100...');
            getData(1000, () => {
        console.log('Added 1000...');
            })
        })
    })
})
