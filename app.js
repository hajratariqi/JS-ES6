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



// understanding of promise concept
let isPizza = true
const makePizza = (makeDoughtFunc) => {
    if(isPizza){
    setTimeout(()=>{
        console.log('Cheese is here...');
        makeDoughtFunc(bakePizza)
    },2000)
}else{
    console.log('SOrry pizza is not found');
}
}
const makeDought = (bakePizzaFunc) =>{
    setTimeout(() =>{
        console.log('Pizza Dought is here');
        bakePizzaFunc()
    }, 2000)
}

const bakePizza = () =>{
    setTimeout(() =>{
        console.log('Pizza is ready...');
    }, 2000)
}
makePizza(makeDought)



// const getData = (id, nextFunc) =>{
// //     setTimeout(() => {
// //     console.log(id);
// //     if(nextFunc){
// //     nextFunc()
// //     }
// // }, 2000)
// // }

// // // this is called callback hell
// // getData(1, () => {
// //     console.log('Added 1...');
// //     getData(10, () => {
// //     console.log('Added 10...');
// //         getData(100, () => {
// //     console.log('Added 100...');
// //             getData(1000, () => {
// //         console.log('Added 1000...');
// //             })
// //         })
// //     })
// // })

// // understanding of promise concept

// let isPizza = true;

// const makePizza = (makeDoughtFunc) => {
//   if (isPizza) {
//     setTimeout(() => {
//       console.log("Cheese is here...");
//       makeDoughtFunc();
//     }, 2000);
//   } else {
//     console.log("SOrry pizza is not found");
//   }
// };

// makePizza(
//     () => {
//   setTimeout(() => {
//     console.log("pizza dought is ready");
//   }, 1000);
// }
// );
