const getData = (id, nextFunc) =>{
    setTimeout(()=>{
        console.log(id)
       
        nextFunc()
        
    }, 1000)
}
getData(1, function() {
    getData(10)
})