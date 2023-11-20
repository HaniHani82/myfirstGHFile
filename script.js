
// function rcGenerator(){
//     let hex = '0123456789abcdef';
//     let color = '#'
//     for (var i = 0; i < 6 ; i++) {
//         color += hex[Math.floor(Math.random() * 16)];
//     }
//     return color
// }

// // console.log(rcGenerator());


// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//     }

//     // document.body.style.backgroundColor = getRandomColor()


// let arrayofColors = ['red', 'blue', 'green', 'pink',  'purple',  'ciyan',  'magenta',  'tomato',  'brown',  'black',  'yellow', 'alicewhite']

// for (let index = 0; index < 1; index++) {
//     const element = arrayofColors[Math.floor(Math.random() * 16)];
//     document.body.style.backgroundColor = element;
// }


//=========================== PROMISES==========================
//first instance 

// let p1 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('task one');
//         resolve()
//     }, 3000);
// })

// p1.then(function(){
//     console.log('info about task one')
// })

// secone instance

// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('async task two')
//         resolve()
//     }, 2000);
// }).then(function(){
//     console.log('info about async task two')
// })


//third instance with data

// let p3 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve({language: 'english', area: 'colony'})
//     }, 2000);
// })

// p3.then(function(data){
//     console.log(data);
// })

// forth  instance with further data to receive

// let p4 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let error = false
//         if (!error) {
//             resolve({language: 'english', area: 'colony'})
//         } else(
//             console.log(new Error('wrong'))
//         )
//     }, 2000);
// })

// p4
// .then(function(value){
//     console.log(value)
//     return value.language
// })
// .then(function(lang){
//     console.log(lang)
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(function(){
//     console.log('finally')
// })

// fifth instance with async await

// let p5 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             resolve({subject: 'english', lesson: 'fifth'})
//         } else(
//             console.log(new Error("that's not  resolved"))
//         )
//     }, 2000);
// })

// async function consP5(){
//     try {
//         let resoponse = await p5
//         console.log(resoponse);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consP5();

//async function

// async function getUsers(){
//  try {
//     let data = await fetch("https://jsonplaceholder.typicode.com/users")
//     const resoponse = await data.json();
//     console.log(resoponse);
//  } catch (error) {
//     console.log(error);
//  }}

// getUsers(); 

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data)=>{
//     return data.json()
// })
// .then((resoponse)=>{
//     console.log(resoponse)
// })
// .catch((error)=>{
//     console.log(error);
// })


// let p1 = new Promise(function(resolve, reject){
//     alert(' this  is an alert in promise')
//     resolve(5)
// })

// p1.then(function(data){
//     console.log(data);
// })


function sum(a, b) {
    let sum = 0
    for (const key in arguments) {
        sum += arguments[key]
    }
    console.log(sum);
}

// sum(8, 9, 10, 9, 4) // in  this case this function will work smoothly
// sum('yahoo', 8, 9, 10, 9, 4)// in this case we have to use spread operator.

function sum(names, ...arg) {
    let sum = 0
    for (const key in arg) {
        sum += arg[key]
    }
    console.log(`${names}  ${sum}`);
    // console.log(sum);
}

// sum('hani', 20, 30, 40, 50, 60)

function sum(names, ...arg) {// rest operator
    let sum = 0
    for (const key in arg) {
        sum += arg[key]
    }
    console.log(`${names}  ${sum}`);
    // console.log(sum);
}

arr = [20, 30, 40, 50, 60]
// sum('hani', ...arr) //spread operator


let arr1 = [2, 4, 6, 8, 10]
let arr2 = arr1
arr2.push(40) // whatever you do to  any  array will effect both coz its reference not copy
// console.log(arr1);
// console.log(arr2);

// in order to make a real copy we need spread operator

arr2 = [...arr1]
// console.log(arr2);
arr2.push(50);
// console.log(arr2);

arr3 = [20, 30, 40, 50, 60];
arr4 = [12, 14, 16, 18, 20]

arr5 = arr3.concat(arr4)
// console.log(arr5);

arr6 = [...arr3, ...arr4]
// console.log(arr5);

////SPREAD OPERATOR WITH OBJECT////////////////////////////////

Obj3 = { 
    a: 1, 
    b: 2,
    c: 3
 };

obj4 = { d: 4,
         e: 5,
         f: 6
        }

obj5 = {...Obj3, ...obj4}
// console.log(obj5);


//// A FUNCTION THAT RETURNS OBJECT/////////////////
let names = "hanif"
let course = "masters"
function student(names, course){
    return {names, course}
}

// console.log(student(names, course));

////// THIS IS HOW YOU DESTRUCTURE AN ARRAY

let user = ['hani', 40, 'siddiqui', 'ahmed' ]

let [fname, age, lastName, middileName] = user

// console.log(fname);

let user1 = ['hani', 40, 'siddiqui', 'ahmed' ]

let [firstName, ...args] = user // DESTRUCTURING USING SPREAD OPERATOR

// console.log(user);

// THIS WORKS ON NESTED ARRARY TOO///////////

let user2 = ['hani', 40, 'siddiqui', 'ahmed', ['male', 2500000] ]

// let [fstName, ages, lname, midname, [gender, salary]] = user2;
let [fstName, ...argUs] = user2 // DESTRUCTURING USING SPREAD OPERATOR

// console.log(fstName);
// console.log(ages);
// console.log(lname);
// console.log(midname);
// console.log(salary);


function userOne(username, usermerit, userid, userlanguage){
    this.username = username, 
    this.usermerit= usermerit, 
    this.userid= userid, 
    this.userlanguage = userlanguage

    this.registration = function (){
        console.log(`${username} has been registered with id # ${userid}`)
    }
}

let userOne = new user('Hanif', 'B-com', 'oo89D', 'javaScript')
console.log(userOne.userid); 