// console.log('Hello Js')

// var a = 5  -> Number
// var a = 'ABCD'  -> String

// var vs let vs const

// var a = 5
// var a = 10
// console.log(a)

// let a = 15
// a = 20
// console.log(a)

// const a = 25
// console.log(a)

// a=10
// var a;
// console.log(a)

// b=10
// let b;
// console.log(b)


// var firstname = "Zeyaur"; // Normal Case
// var lastName = "Rahman"; // Camel Case
// console.log(firstname+" "+lastName);
  
// // console.log(`firstname: ${firstname} lastName: ${lastName}`)

// let value = 100
// let to = value == 100
// console.log(to)  // true

// console.log(5==5) // true

// console.log(5=='5')  // true

// console.log(5==='5')  // false



// undefined vs null

// let user
// console.log(user) // undefined

// let user = null
// console.log(user) // null



// Conditional Statement 

// if(true){
//     console.log('Hello')
// }
// else{
//     console.log('Hii')
// }

// let isBool = true
// isBool?console.log('Hello'):console.log('Hii')



// let arr = [1,2,3,4,5,'One',true]
// console.log(arr[5])


// function sum(){
//     console.log('Hello')
// }
// sum()

// const add=() => {
//     console.log('Hii')
// }
// add()



// Loops

// for (let i = 0; i <= 4; i++) {
//   console.log(i)
//   }
  
           
// let arr = [1,2,3,4,5,6,7,8]

// for(let i in arr){
//   console.log(i)  // index show karega
// }


// for(let i of arr){
//   console.log(i)  // index ka array show karega 
// }



// arr.forEach(val => console.log(val))



// let arr.filter((a,b,c)=>{
//     console.log(a)

// })
// console.log(filter1)



// let newa1=  arr.map((a,b,c)=>{
//   // console.log(a,b,c)
//   return a>3

// })
// console.log(newa1)



// for(let i=0;i<5;i++){

// }



// let arr = [1,2,3,4,5,6]
//    let new2 = arr.reduce((a,b,c,d)=>{
//         return a+b
//     })
//     console.log(new2)

//     a=a+b

//     a=1
//     b=2 

//     b=3   (b yha pe iterate karega)
//     b=4
//     b=5
//     b=6


//     a=1+2
//     a=3
//     a=3+3
//     a=6
//     a=6+4
//     a=10
//     a=10+5
//     a=15
//     a=15+6
//     a=21


//    (c aur d index aur array show karta hai)





// Object

// let students = {
//     name:'Zeyaur',
//     age:21,
//     isPass:true
// }
// console.log(students.name)
// console.log(students.age)
// console.log(students.isPass)



// let students = {
//     name:'Zeyaur',
//     age:21,
//     isPass:true
// }
// add(students)
// students.name='Rahman'


// let obj={
//     firstName:'Zeyaur',
//     lastName:'Rahman',
//     sum:function(){
//         console.log(this.firstName +" "+ this.lastName)
//     }
// }
// obj.sum()


// let arr=[{id:1,name:'Zeyaur'},{id:2,name:'Rahman'}]
// arr.map((k)=>{
//     console.log(k.id)
// })
// // console.log(arr.id) // undefined


// let arr = [1,2,3,4,5,6]
//     arr.push(10)
//     arr.pop()
//     // arr.shift()
//     arr.unshift(0)
//     console.log(arr)






// Execution Contest

// let user = 'Zeyaur'
// console.log(user)








// Hoisting =>

// Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that you can use variables and functions in your code before they are actually declared.


// Variable Hoisting:

// console.log(x);  // undefined
// var x = 5;
// console.log(x);  // 5

// In the example above, the variable x is hoisted to the top of its containing scope during compilation. The console.log(x) before the declaration is allowed, but the value is undefined until the actual assignment is encountered.


// Function Hoisting:

// sayHello();  // "Hello!"
// function sayHello() {
//     console.log("Hello!");
// }


// Functions, when declared using the function keyword, are also hoisted to the top of their containing scope. This allows you to call a function before its declaration in the code.

// It's important to note that hoisting only moves the declarations to the top, not the initializations. If a variable is declared and initialized later in the code, the initialization will stay in its original place.

// However, hoisting can lead to confusion if not understood properly, and it's generally considered good practice to declare variables at the top of their scope and to define functions before they are called. This makes the code more readable and avoids unexpected behaviors.


// add()
// function add(){
//     console.log('Hii')
// }


// add()
// var add=()=>{
//     console.log('Hello')
// }


// let b = 10

// {
//     var a = 5
//     let b = 5
//     console.log(a)
//     console.log(b)
// }
// console.log(b)





// Higher Order Funnction => (Function => Ek block of code hota hai jisko humlog baar baar call karte hai)


// function outer(a){
//     console.log('Hello')
//     a()
//     //console.log(a)
// }

// function inner(){
//     console.log('Hiii')
// }

// outer(inner)


// function outer(){
//     console.log('Outer')
//     function inner(){
//         console.log('Inner')
//     }
//     return inner
// }
// let inner = outer()
// inner()






// Ques:- Create a function and filter it like number, string, boolean.

// let arr = [1,2,3,4,5,true,false,'string','Hello','Hiii']

// function getString(arr){
//     let res = []
//     for(let item of arr){
//         if(typeof item == 'string'){
//             res.push(item)
//         }
//     }
//     return res
// }

// function getNumber(arr){
//     let res = []
//     for(let item of arr){
//         if(typeof item == 'number'){
//             res.push(item)
//         }
//     }
//     return res
// }

// function getBoolean(arr){
//     let res = []
//     for(let item of arr){
//         if(typeof item == 'boolean'){
//             res.push(item)
//         }
//     }
//     return res
// }
// console.log(getString(arr))
// console.log(getNumber(arr))
// console.log(getBoolean(arr))




// By Higher Order Function 

// var arr = [1,2,3,4,5,true,false,'string','Hello','Hiii']

// function getString(item){
//     return typeof item === 'string'
// }

// function getNumber(item){
//     return typeof item === 'number'
// }

// function getBoolean(item){
//     return typeof item === 'boolean' 
// }

// function get(arr, fn){
//     let res = []
//     for(let item of arr){
//         if(fn(item)){
//             res.push(item)
//         }
//     }
//     return res
// }
// console.log(get(arr,getString))
// console.log(get(arr,getNumber))
// console.log(get(arr,getBoolean))




// Closure





// Prototype 

// let obj = {
//     id:1,
//     user:'Zeyaur',
//     print:function(){
//         console.log(this.user)
//     }
// }
// // obj.print()
// console.log(obj.toString())







// Asynchronous programming :- Asynchronous programming is a programming paradigm that allows multiple tasks to be executed concurrently without waiting for each other to complete.

console.log('One');
setTimeout(()=>{
    console.log('Two');
},2000)
console.log('Three');
console.log('Four');





// Callback hell

// Promise
