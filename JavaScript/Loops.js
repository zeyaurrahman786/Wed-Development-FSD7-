/*
Loops :- Loops offer a quick and easy way to do something repeatedly.

There are seven types of loops in JavaScript

1. for
2. while 
3. do-while
4. forEach
5. map
6. for-of
7. for-in
*/




/* 
    1. Syntax of the for loop :- 

    for (initialExpression; condition; updateExpression) {
        // for loop body
    }

*/

// const cars = ["TaTa", "Volvo", "BMW"];
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }





/*
    2. Syntax of the While loop :-

    while (condition) {
        // body of loop
    }
*/

// const cars = ["TaTa", "Volvo", "BMW"];
// let i = 0;
// while (i < cars.length) {
//     console.log(cars[i]);
//     i++;
// }

 



/*
    3. Syntax of the do-while loop :-

    do {
        // body of loop
    } while (condition)
*/

// const cars = ["TaTa", "Volvo", "BMW"];
// let i = 0;
// do {
//     console.log(cars[i]);
//     i++;
// } while (i < cars.length);






/*
    4. Syntax of the forEach loop :-

    // array.forEach(function(currentValue, index, arr))
*/

// const cars = ["TaTa", "Volvo", "BMW"];
// cars.forEach((ele) => {
//     console.log(ele);
// });






/*
    5. Syntax of the map :-

    // array.map(function(currentValue, index, arr), thisValue)
*/

// const cars = ["TaTa", "Volvo", "BMW"];
// const newCars = cars.map((ele) => {
//     return ele.toUpperCase()
// });





/*
    6. Syntax of the for-of loop :-

    for (element of iterable) {
        // body of for...of
    }
*/

// const cars = ["TaTa", "Volvo", "BMW"];
// for(let ele of cars) {
//     console.log(ele);
// }







/*
    7. Syntax of the for-in loop :-

    for (key in object) {
        // body of for...in
    }
*/

// const cars = ["TaTa", "Volvo", "BMW"];
// for(let key in cars) {
//     console.log(cars[key]);
// }








// for(let i=1;i<=50;i++){
//     if(i%2==0){
//       console.log(i) 
//     }
// }

// let num = Number(prompt("Enter a number"))
// let sum = 0
// for(let i=1; i<=num; i++){
//     sum = i + sum
// }
// console.log(sum);

// let num = Number(prompt("Enter a number"))
// let sum = 0
// for(let i=1; i<=num; i++){
//     if(i%2==0)
//     sum = i + sum
// }
// console.log(sum);