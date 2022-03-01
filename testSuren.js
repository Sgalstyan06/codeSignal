
//task 1

// let longText = "any text goes here";

// String.prototype.getFirstWord =  function (){
//     return this.split(" ")[0];
// } 
// String.prototype.getThis = function(){
//   console.log(this)
// }
// const first_word =longText.getFirstWord();
// console.log("first_word = ", first_word); 

//task 2


// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null,
//         },
//       },
//     },
//   };

//   function objRec(obj){
//     if(obj===null)return 0;
//     return obj.value + objRec(obj.next)
//   }
//   console.log(objRec(list))





// task 3

// function Person(name) {
//   this.name = name;
  
// }
// Person.prototype.getName = () => {
//   return this.name;
// };
// const tom = new Person('Tom');
// console.log(tom.getName()); 

//because we use arrow function, t
//his for arrow function can take a context from his parent functoin


// task 4

// class-ը new-ով կանչելիս ինչ քայլեր են տեղի ունենում,
//  գրեք հերթական քայլերը: ինչ է իրենից ներկայացնում proto-ն,
//   ինչ տարբերություն prototype-ի հետ՞

// when we call class with new first its create a empty object
// then with constructor we can create property for object using argument like this.name = name
// when we want to inherit obj1 object to onather object2 we use __proto__
// and that object obj1 can use all inside the obj2;
// prototype use for classe or function to create prototype ,proto use for object 


// task 5


// const people = [-1, 150, 190, 170, -1, -1, 160, 180];
 
// function solution(people){
//     let sortPeapleByHeight = [];
//     let index = 0;
//     sortPeapleByHeight = people.filter(item=>{
//         if(item !== -1)return item;
//     })
//     sortPeapleByHeight.sort((a,b)=>a-b);
//    return people = people.map(element => {
//         if(element===-1){
//             return element;
//         }else{
//             return sortPeapleByHeight[index++];
//         }
        
//     });

// }
// console.log(people);
// console.log(solution(people));;

// task 6

// Տրված է PersonCl classը:
// Ստեղծեք PersonCl-ի instance
// Ինչ տարբերություն greet և hey ֆունկցիաների միջև:


// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   static hey() {
//     console.log("Hey there 👋");
//     console.log(this);
//   }
// }

// let user = new PersonCl("Galstyan",1986);

//greet is a function of class PersonCl and it can use his instance 
// and instance can not use hey function because its a static,
// the static function can use only a class who belong that static function
// for example  user.hey() return a error, but user.gree() will return a Hey Galstyan,
// but PersonCl.hey() wil return log and this context,but PersonCl.geet() will return error

// task7
// Ինչ կտպի այս կոդը՞: Ին՞չն է այստեղ բաց թողնված, Ֆիքսեք այն:


// var promise = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve('hello world');
//     }, 2000);
// });

// promise.then(function(data) {
//     console.log(data + ' 1');
// });

// promise.then(function(data) {
//     console.log(data + ' 2');
// });

// promise.then(function(data) {
//     console.log(data + ' 3');
// });
//resolve in 119 row argument is absent
// will print hellow world 1,  hellow world 2,  hellow world 3;

// task 8

//Ինչ կտպի այս կոդը և ինչու 


// function job() {
//     return new Promise(function(resolve, reject) {
//         reject();
//     });
// }

// let promise = job();

// promise

// .then(function() {
//     console.log('Success 1');
// })

// .then(function() {
//     console.log('Success 2');
// })

// .then(function() {
//     console.log('Success 3');
// })

// .catch(function() {
//     console.log('Error 1');
// })

// .then(function() {
//     console.log('Success 4');
// });

// will print Error 1, then Success 4,because our promise is return a reject and will
// work catch branch and go on

// task 9


// Ունենք 2 API request-ներ, ամեն մեկը տևում է ենթադրենք 2 վայրկյան: 
// Այս դեպքում այս 2 requestները իրար հետևից կանչելով 2ի աշխատանքը կտևի 4 վայրկյան: 
// Ինչպես կարող ենք փոփոխել կոդը, որ 2ի պատասխանը միասին ստանանք 2 վայրկյան հետո: 
// Գրեք փոփոխած կոդը

//use Promise[all]

// fetch(`https://restcountries.com/v2/name/armenia`)
//   .then((response) => {
//     if (!response.ok) throw new Error(`Country not found (${response.status})`);
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Armenia: data=", data);
//   });

// fetch(`https://restcountries.com/v2/name/australia`)
//   .then((response) => {
//     if (!response.ok) throw new Error(`Country not found (${response.status})`);
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Australia: data=", data);
//   });

  //
