// const getData = (id, nextFunc) =>{
//     setTimeout(() => {
//     console.log(id);
//     if(nextFunc){
//     nextFunc()
//     }
// }, 2000)
// }  

// // this is called callback hell
// getData(1, () => {
//     console.log('Added 1...');
//     getData(10, () => {
//     console.log('Added 10...');
//         getData(100, () => {
//     console.log('Added 100...');
//             getData(1000, () => {
//         console.log('Added 1000...');
//             })
//         })
//     })
// })


// let isPizza = true;

// const makePizza = (makeDoughtFunc, finalOrder) => {
//   if (isPizza) {
//     setTimeout(() => {
//       console.log("Cheese is here...");

//       makeDoughtFunc(finalOrder);

//     }, 2000);
//   } else {
//     console.log("SOrry pizza is not found");
//   }
// };

// makePizza(
//     (finalOrder) => {
//     setTimeout(() => {
//         console.log("pizza dought is ready");
//         finalOrder()
//     }, 1000);
// }, 

// function finalOrder(){
//     setTimeout(() => {
//     console.log('pizza is ready');
// }, 4000);
// }

// );

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


const bookCar = () =>{
  return new Promise((resolve, reject)=>{
    console.log('car booking start...');
    setTimeout(()=>{
      resolve('Car order booked')
    },2000)
  })
}
bookCar()
.then((res)=>{
  console.log(res);
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("Now start car carefully")
    },1000)
})
})
.then((res)=>{
  console.log(res);
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Now go to restaurant in car')
    },2000)
  })
})
.then((res)=>{
  console.log(res);
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Now eat food')
    },700)
  })
})
.then((res)=> console.log(res))
.catch((err)=>{
  console.log(err);
})