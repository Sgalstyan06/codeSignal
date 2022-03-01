//task1
// const flight = "LH234";
// const jonas = {
//   name: "Jonas Schmedtmann",
//   passport: 24739479284,
// };

//  const checkIn = function (flightNum, passenger) {
//    flightNum = "LH234-checked";
//     let passengerobj = {...passenger};
//    passengerobj.name = "Mr. " + passengerobj.name;

//   if (passenger.passport === 24739479284) {
//     console.log("Checked in");
//     console.log("passnagerobj name is " + passengerobj.name);

//   } else {
//     console.log("Wrong passport!");
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// task 2
// function sayItIsTheBest(par) {
//   return `${par} is the best!`;
// }
// const transformer = function (str, fn) {
//   const transformedString = fn(str);

//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${transformedString}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer("Javascript", sayItIsTheBest);
// transformer("Java", sayItIsTheBest);

// task3
// function Country(name, yearFounded) {
//     this.name = name;
//     this.yearFounded = yearFounded;
//     this.describe = function(){
//         console.log(this.name + " was founded in " + this.yearFounded);
//     }
//   }

//   const america = new Country("The United States of America", 1776);
//   america.describe();
//   const armenia = new Country("The Armenia ","mta 5000");
//   armenia.describe();
//   const goergia = new Country("The Goergia ",1100);
//   goergia.describe();

// task 4

// const book = {
//     title: "Brave New World",
//     author: "Aldous Huxley",
//    };

//    function summary() {
//     console.log(`${this.title} was written by ${this.author}.`);
//    }
//    summary.call(book);

// task 5

// const whoAmI = {
//     name: "Leslie Knope",
//     regularFunction: function () {
//       console.log(this.name);
//     },
//     arrowFunction: () => {
//       console.log(this.name);
//     },
//   };

//   whoAmI.regularFunction();//Leslie Knope
//   whoAmI.arrowFunction();//undefined because arrow function has not owner keyword this
// its can take only this from his parent function and
// when functcion will bee a constructure function

// task 6

//     const myUsers = [
//         { name: "shark", likes: "ocean" },
//         { name: "turtle", likes: "pond" },
//         { name: "otter", likes: "fish biscuits" },
//       ];
//    let usersByLikes = {}
//    for(let val of myUsers){
//        usersByLikes[val.name] = val.likes;
//    }
//    console.log(usersByLikes);
  
// task 7

// const p = document.querySelector("p");
// p.innerHTML = "Hello World";
// setTimeout(function () {
//   console.log("text color changed");
//   p.style.color = "blue";
// }, 0);
// p.style.color = "red";   
        // will print blue because asynce function will come at end
        // first color will be a red than setTimeout cange color blue


    // task 8

    // let i = 0;
    // function increment() {
    //   i++;
    //   console.log(i);
    //   if(i ===10){
    //       clearInterval(clearInt);
    //   }
    // }
    //  let clearInt = setInterval(increment, 1000);

    // task 9

    // const object = {
    //     message: "Hello, World!",
    //   };
    //   function logMessage() {
    //     console.log(this.message); // "Hello, World!"
    //   }

    //   logMessage.call(object);

    // 10

    // function personalDice(name) {
    //     return function () {
    //       // generate random number between 1 and 6
    //       const newRoll = Math.floor(Math.random() * 6);
    //       console.log(`${name} rolled a ${newRoll}`);
    //     };
    //   }
      
    //   const dansRoll = personalDice("Dan");
    //   const zoesRoll = personalDice("Zoe");
      
    //   dansRoll();
    //   dansRoll();

    //   name  is a closure
    // mayby it is a closer
    // newRoll used only in a scope where is closed the currly brace of his function  

