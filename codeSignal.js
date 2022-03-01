// //task 11

// function solution(n) {
//     let str = "" + n;
//     let startHalf = 0;
//     let endHalf = 0;
//     let arr = str.split("");
//     for(let i=0; i<arr.length/2;i++){
//         endHalf +=arr[arr.length-1-i];
//         startHalf +=arr[i];
//     }
//     if(endHalf === startHalf)return true;
//     return false;
// }

//task 13
// function solution(inputString) {
//     while (true) {
//         let c = inputString.indexOf(")");
//         if (c === -1) break;
//         let o = inputString.substring(0, c).lastIndexOf("(");
//         let start = inputString.substring(0, o);
//         let middle = inputString.substring(o + 1, c).split("").reverse().join("");
//         let end = inputString.substring(c + 1, inputString.length);
//         inputString = start + middle + end;
//     }
//     return inputString;
// }
// function solution(inputString) {
//     while(true){
//         let firstCloseParenth = inputString.indexOf(")");
//         if(firstCloseParenth === -1)break;
//         let lastOpenParenth = inputString.lastIndexOf("(");
//         let start = inputString.substring(0,lastOpenParenth);
//         let end = inputString.substring(firstCloseParenth +1,inputString.length);
//         let midle = inputString.substring(lastOpenParenth+1,firstCloseParenth).split("").reverse().join("");
//         inputString = start + midle + end;
//     }
//     return inputString;
// }

// task 16
//this version return one error but it is hidden
// function solution(a, b) {
//     let pair = 0;
//     let rem ;
//  for(let i = 0; i< a.length;i++ ){
//      if(a[i]!==b[i]){
//         pair++;
//          if (pair >1)return false;
//         for(let j = i; j < b.length;j++){
//           if(a[i] === b[j]){
//               rem = b[i];
//               b[i] = b[j];
//               b[j] =rem;
//               break;
//           }else if(j === b.length-1){
//               return false;
//           }
//         }
//     }
//   }
//  return true;
// }
//task 16 version no work time limits finish
// function solution(a, b) {
//     let pair = 0;
//     let rem ;
//  for(let i = 0; i< a.length;i++ ){
//      if(a[i]!==b[i]){
//         pair++;
//          if (pair >1)return false;

//     }
//   }
//   a = a.sort((a,b)=>a-b).join("");
//   b = b.sort((a,b)=>a-b).join("");
//  // console.log(typeof(a),b);
//   if( a===b)return true;

// }
// console.log([1,2,3,4]==[1,2,3,4]);
// // [12,4].every
// let inputArray =[34, 2];
// function solution(inputArray){
//    let x;
//    for(let i = 0; i<inputArray.length; i++){
//        if(inputArray[i]>inputArray[i+1]){
//           x =inputArray[i]+1-inputArray[i+1];
//            inputArray[i+1]=inputArray[i]+1;
//        }
//    }
//   return x;
// }
// console.log(solution(inputArray));

//task 20

//     function solution(inputArray) {
//         let result =0;
//         let minus;
//         for(let i = 0; i<inputArray-1;i++){
//           if(inputArray[i]!==inputArray[i+1]){
//                minus = Math.abs(inputArray[i]-inputArray[i+1]);
//              if (result===0){
//               result = minus;
//             }else if(result<minus){
//                 result = minus;
//             }

//           }
//         }
//         return (result===0)?0:result;
//     }
// console.log(solution([2, 4, 1, 0]));

//task 21

// function solution(inputString) {
//   let arr = inputString.split(".");
//  //  if(arr.length !== 4)return false;
//  arr.forEach(elem=>{
//      let a = Number(elem);
//      if(a<0 && a>255)return false;
//  })
//  return true;
// }

//task 24 box blur
// function boxBlur(image) {
//     const SQUARE = 3
//     const outerArr = []

//     for (let i = 0; i < image.length; i++) {
//         const innerArr = []

//         for (let j = 0; j < image[0].length; j++) {
//             if (image[i][j] !== undefined && image[i][j+2] !== undefined && image[i+2]) {
//                 let sum = 0

//                 for (let k = 0; k < SQUARE; k++) {
//                     for (let y = 0; y < SQUARE; y++) {
//                         sum += image[i+k][j+y]
//                     }
//                 }
//                 innerArr.push(Math.floor(sum/9))
//             }
//         }
//         if (innerArr.length) outerArr.push(innerArr)
//     }
//     console.log(outerArr)
// }

// boxBlur([[7,4,0,1],
//     [5,6,2,2],
//     [6,10,7,8],
//     [1,4,2,0]]);

//task mines 25
// function minesweeper(matrix) {
//     var adjacents = ([i, j]) => [
//       [i - 1, j - 1],
//       [i - 1, j],
//       [i - 1, j + 1],
//       [i, j - 1],
//       [i, j + 1],
//       [i + 1, j - 1],
//       [i + 1, j],
//       [i + 1, j + 1],
//     ];
//     var hintsMatrix = matrix.map((r) => r.map((_) => 0));

//     for (var i = 0; i < matrix.length; i++) {
//       for (var j = 0; j < matrix[i].length; j++) {
//         if (matrix[i][j]) {
//           var myAd = adjacents([i, j]);
//           for (var k = 0; k < 8; k++) {
//             if (
//               myAd[k][0] >= 0 &&
//               myAd[k][1] >= 0 &&
//               myAd[k][0] < matrix.length &&
//               myAd[k][1] < matrix[i].length
//             ) {
//               hintsMatrix[myAd[k][0]][myAd[k][1]]++;
//             }
//           }
//         }
//       }
//     }

//     console.log(hintsMatrix);
//   }

//   minesweeper([[true,false,false],
//     [false,true,false],
//     [false,false,false]])
//task 26
// function solution(name) {
//     if(Number(name[0]))return false;
//    for(let i = 0; i< name.length; i++){
//      if(Number(name[i]) || name[i]==="_" || (/[a-zA-Z]/).test(name[i])||Number(name[i])===0) continue;
//   return false;
//    }
//    return true;
// }

//console.log(solution(" var iable0"));

//task 29

// function chessBoardCellColor(cell1, cell2) {
//   return (
//     cell1
//       .split("")
//       .reduce(
//         (a, b) => Math.abs(a.charCodeAt(0) - "A".charCodeAt(0) + 1 - b) % 2
//       ) ===
//     cell2
//       .split("")
//       .reduce(
//         (a, b) => Math.abs(a.charCodeAt(0) - "A".charCodeAt(0) + 1 - b) % 2
//       )
//   );
// }
//task 29 I change  the code
// function chessBoardCellColor(cell1, cell2) {
//     return (
//       cell1
//         .split("")
//         .reduce(
//           (a, b) => Math.abs(a.charCodeAt(0) - b) % 2
//         ) ===
//       cell2
//         .split("")
//         .reduce(
//           (a, b) => Math.abs(a.charCodeAt(0) - b) % 2
//         )
//     );
//   }

// console.log(chessBoardCellColor("A1","H4"));//A = 65 ....h = 72
//a8 b8 c8 d8 e8 f8 g8           +8      8  9  10 11 12 13 14 15
//a7 b7 c7 d7 e7 f7 g7           +7      7  8  9  10 11 12 13 14
//a6 b6 c6 d6 e6 f6 g6           +6      6  7  8  9  10 11 12 13
//a5 b5 c5 d5 e5 f5 g5           +5      5  6  7  8  9  10 11 12
//a4 b4 c4 d4 e4 f4 g4           +4      4  5  6  7  8  9  10 11
//a3 b3 c3 d3 e3 f3 g3           +3      3  4  5  6  7  8  9  10
//a2 b2 c2 d2 e2 f2 g2           +2      2  3  4  5  6  7  8  9
//a1 b1 c1 d1 e1 f1 g1           + 1     1  2  3  4  5  6  7  8

//task32

// function solution(a) {
//   const vals = [];

//    a.forEach(int => {
//      const sum = a.reduce((accum, next) => {
//        return accum + Math.abs(next  - int);
//      }, 0);

//      vals.push(sum);
//    });

//    console.log(vals);
//    const lowest = Math.min(...vals);
//    return a[vals.indexOf(lowest)];
//  }
//my change version
// function sol(a){
//   let sum = 0;
//   let arr = [];
//   for(let i = 0; i<a.length;i++){
//     for(let j = 0;j<a.length;j++){
//       sum +=Math.abs(a[i] - a[j]);
//     }
//     arr.push(sum);
//     sum= 0;
//   }

//   console.log(arr);
//   let index = Math.min(...arr);

//    return a[arr.indexOf(index)];
// }

//task 33

// function stringsRearrangement(inputArray) {
//     var ret = false;
//     var solution = [];

//     function bt () {
//         for (var i = 0; i<inputArray.length; i++) {
//             if(ret) break;
//             solution.push(inputArray.splice(i,1)[0]);
//             if (inputArray.length === 0) {
//                 ret = ret || checkSolution();
//             }
//             else{
//                 bt();
//             }
//             inputArray.splice(i,0,solution.pop());
//         }

//     }
//     function checkSolution () {
//         for (var i = 0; i < solution.length - 1; i++){
//             var diff =0;
//             for (var j = 0; j<solution[i].length; j++) {
//                 if (solution[i][j] !== solution[i+1][j]){
//                     diff++;
//                 }
//             }
//             if(diff !== 1){
//                 return false;
//             }
//         }
//         return true;
//     }
//     bt();
//     return ret;
// }

// task 34

// function solution(inputArray, k) {
//     let newArr=[];
//     for(let i = 0; i<inputArray.length; i++){
//         if((i+1)%k!==0){
//             newArr.push(inputArray[i]);
//         }
//     }
//     return newArr;
// }

// solution([2, 4, 6, 8, 10],2);

// task 36

//     function solution(s) {
//         let arr = s.split("");
//         let count= 0
//         for(let i = 0; i<arr.length;i++){
//             let j = 0;
//             for( j = 0; j<=i;j++){
//                 if(arr[i]===arr[j]){
//                     break;
//                 }
//             }
//             if(i===j){
//                 count++;
//             }
//         }
//         return count;
//     }

//    let aa =  solution("andfadbssd");
//    console.log(aa);

// task 37

// function solution(inputArray, k){

//     let sum = 0;

//     let sumcompare = 0;

//     for(let i = 0;i<inputArray.length-k;i++){
//         for(let j = i; j<i+k;j++){
//             sum+=inputArray[j];
//         }

//         if(sum>sumcompare)sumcompare = sum;
//         sum =0;

//     }
//     return sumcompare;

//     }

//     let result = solution([1, 3, 2, 4],3);
//     console.log(result);

// unknown task is omd

// task 39

// function solution(value1, weight1, value2, weight2, maxW) {
//     if(maxW < weight1 && maxW < weight2)return 0;

//     if(maxW>=(weight1+weight2)){
//         return value1 + value2;
//     }
//     if(weight1<weight2){
//         if(maxW >= weight2 ){
//             if(value2>value1){
//                 return value2;
//             }else{
//                 return value1}
//         }else {
//             return value1;
//         }
//     }
// }

// console.log(solution(10, 5, 6, 4, 8))

// task 41

// function solution(n) {
//   if (n < 10) return 0;
//   let str = "" + n;
//   let arr = str.split("");

//   let deepsSum = 0;

//   arr.reduce((acum, item, index) => {
//     if (index != arr.length - 1) {
//       return acum += +item;
//     }else{
//         acum += +item;
//     }

//     deepsSum = acum;
//   }, 0);

//   if (deepsSum < 10) {
//     return 1;
//   } else {
//     str = "" + deepsSum;
//     arr = str.split("");
//     arr.reduce((acum, item,index) => {
//         if (index != arr.length - 1) {
//             return acum += +item;
//           }else{
//               acum += +item;
//           }
      
//           deepsSum = acum;
//         }, 0);
//     if (deepsSum < 10) {
//       return 2;
//     } else {
//       return 3;
//     }
//   }
// }

// console.log(solution(8897));
