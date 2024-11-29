// // const getData = (id, nextFunc) =>{
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


// // let isPizza = true;

// // const makePizza = (makeDoughtFunc, finalOrder) => {
// //   if (isPizza) {
// //     setTimeout(() => {
// //       console.log("Cheese is here...");

// //       makeDoughtFunc(finalOrder);

// //     }, 2000);
// //   } else {
// //     console.log("SOrry pizza is not found");
// //   }
// // };

// // makePizza(
// //     (finalOrder) => {
// //     setTimeout(() => {
// //         console.log("pizza dought is ready");
// //         finalOrder()
// //     }, 1000);
// // }, 

// // function finalOrder(){
// //     setTimeout(() => {
// //     console.log('pizza is ready');
// // }, 4000);
// // }

// // );

// // const getData = (id, nextFunc) =>{
// // //     setTimeout(() => {
// // //     console.log(id);
// // //     if(nextFunc){
// // //     nextFunc()
// // //     }
// // // }, 2000)
// // // }

// // // // this is called callback hell
// // // getData(1, () => {
// // //     console.log('Added 1...');
// // //     getData(10, () => {
// // //     console.log('Added 10...');
// // //         getData(100, () => {
// // //     console.log('Added 100...');
// // //             getData(1000, () => {
// // //         console.log('Added 1000...');
// // //             })
// // //         })
// // //     })
// // // })

// // // understanding of promise concept

// // let isPizza = true;

// // const makePizza = (makeDoughtFunc) => {
// //   if (isPizza) {
// //     setTimeout(() => {
// //       console.log("Cheese is here...");
// //       makeDoughtFunc();
// //     }, 2000);
// //   } else {
// //     console.log("SOrry pizza is not found");
// //   }
// // };

// // makePizza(
// //     () => {
// //   setTimeout(() => {
// //     console.log("pizza dought is ready");
// //   }, 1000);
// // }
// // );


// // const bookCar = () =>{
// //   return new Promise((resolve, reject)=>{
// //     console.log('car booking start...');
// //     setTimeout(()=>{
// //       resolve('Car order booked')
// //     },2000)
// //   })
// // }
// // bookCar()
// // .then((res)=>{
// //   console.log(res);
// //   return new Promise((resolve, reject)=>{
// //     setTimeout(()=>{
// //       resolve("Now start car carefully")
// //     },1000)
// // })
// // })
// // .then((res)=>{
// //   console.log(res);
// //   return new Promise((resolve, reject)=>{
// //     setTimeout(()=>{
// //       resolve('Now go to restaurant in car')
// //     },2000)
// //   })
// // })
// // .then((res)=>{
// //   console.log(res);
// //   return new Promise((resolve, reject)=>{
// //     setTimeout(()=>{
// //       resolve('Now eat food')
// //     },700)
// //   })
// // })
// // .then((res)=> console.log(res))
// // .catch((err)=>{
// //   console.log(err);
// // })


// // question 1
// // var  scope
// const varScope = () =>{
//     var num = 2
//     if(num === 2){
//         var newNum = 5
//     }else{
//         console.log(`${num} is not equal to 2`);
//     }
//     // "var" ignores block scope, so newNum is accessible here.
//     console.log(`${newNum} The variable declared with var is accessible outside the block since var has function or global scope`);   
// }
// varScope()

// // question 2
// // let  scope
// const letScope = () =>{
//     let num = 5
//     if(num === 5){
//         let newNum = 5
//     // "Let" just availible at there scope, so newNum is accessible here.
//         console.log(`${newNum} Let: The variable declared with let is accessible only within the block because let has block scope.`);   
//     }else{
//         console.log(`${num} is not equal to 2`);
//     }
// }
// letScope()

// // question 3
// // const scope
// const constScope = () =>{
//     const num = 3
//     if(num === 3){
//         const newNum = 5
//         console.log(`${newNum} Const: The variable declared with 'const' is block-scoped like 'let', but its value cannot be reassigned after being declared`);   
//     }else{
//         console.log(`${num} is not equal to 2`);
//     }
// }
// constScope()

// // question 2
// const createMultiplier = (multiplier) =>{
//     return () =>{
//         console.log(multiplier * 3);
//         return () =>{
//             console.log(multiplier);
//         }
//     }
// }
// let double = createMultiplier(2)
// let triple = createMultiplier(3)
// console.log(double());
// console.log(triple());

// // question 3 
// const myObj = {name: 'hajra', age: '16'}
// const destructureFunc = ({name ,age , country = 'pakistan', city = 'karachi'}) =>{
//     console.log(name);
//     console.log(age);
//     console.log(country);
//     console.log(city);
    
// }
// destructureFunc(myObj)


// question 4
const calculateTotal = (price, ...discount) =>{
    return  discount.reduce((previousValue, currentValue)=> previousValue - currentValue ,price)
    
}
console.log(calculateTotal(400, 20, 30, 10))