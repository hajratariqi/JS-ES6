const getData = (id, nextFunc) =>{
    setTimeout(()=>{
        console.log(id)
       if(nextFunc){
        nextFunc()
       }
    }, 1000)
}
getData(1, function() {
    getData(10)
})