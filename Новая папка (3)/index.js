        // 1-MASALA
// let strNumbers = "34567"; // [7, 6, 5, 4, 3]

// function reversedNumArr(arg) {
//     let arr = arg.split('').reverse();

//     let newArr = []
//     arr.forEach((element) => {
//         return newArr.push(Number(element));
//     });

//     return newArr
// }

// console.log(reversedNumArr(strNumbers));



        // 2-MASALA
/* 
== va === ni farqi
ikkalasida ham tengmi? deb savol beradi,
lekn 3talik (===) da type'iga cha tekshiradi
*/
// Example:
// let num = 4

// if (num == `4`) {
//     console.log(true, '28'); // true
// } else {
//     console.log(false, `30`);
// }

// if (num === `4`) {
//     console.log(true, `34`);
// } else {
//     console.log(false, `36`); // false
// }


        // 3-MASALA
// let n = prompt(`Enter a number`);

// if (!isNaN(n)) {
//     if (n > 0) {
//         let arr = []
//         function recursionArr(i) {
//             arr.push(i);
//             i += 1;

//             if (i > n) {
//                 return;
//             };
//             recursionArr(i);
//         }
//         recursionArr(1);
//         console.log(arr);
//     } else {
//         let arr = []
//         function recursionArr(i) {
//             arr.push(i);
//             i -= 1;

//             if (i < n) {
//                 return;
//             };
//             recursionArr(i);
//         }
//         recursionArr(1);
//         console.log(arr);
//     }
// } else {
//     console.log(`It must be only number`);
// }



        // 4-MASALA
// let arr = [1, 2, 3, 4, 5, 6, 7, 8]; // [20], [16] [20, 16]

// let sum = 0;
// let odd = arr.filter((v) => {
//     return v % 2 == 1;
// })

// odd.forEach((v) => {
//     return sum += v;
// })
// let oddSum = [sum];

// sum = 0;
// let even = arr.filter((v) => {
//     return v % 2 == 0;
// })

// for (const iterator of even) {
//     sum += iterator
// }
// let evenSum = [sum]

// console.log(oddSum.concat(evenSum));



        // 5-MASALA
// let str = `Hello!, !How A!re y!ou`;

// if (typeof str != 'number' && str != undefined && str != null && str != true && str != false) {
//     function removeElement(str) {
//         if (!str.split('').includes(`!`)) {
//             return `It hasn ! element`;
//         }

//         let newStr = ``
//         for (let i = 0; i < str.length; i++) {
//             if (str[i] == '!') {
//                 continue;
//             }
//             newStr += `${str[i]}`
//         }

//         return newStr
//     }

//     console.log(removeElement(str));
// } else {
//     console.log(false);
// }



        // 6-MASALA
// let arr = [1, 2, 3, 4,];
// let arr2 = [5, 6, 7];

// function sumEachArr(arr, arr2) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] != `number`) {
//             continue; 
//         }

//         sum += arr[i];
//     }
//     console.log(`First array's sum is ${sum}`);

//     sum = 0;
//     for (let i = 0; i < arr2.length; i++) {
//         if (typeof arr2[i] != `number`) {
//             continue; 
//         }

//         sum += arr2[i];
//     }

//     console.log(`Second array's sum is ${sum}`);
// }

// sumEachArr(arr, arr2)



        // 7-MASALA
// let str = `Hello`; // `ell`;

// function removeFirtsEndElements(str) {
//     return str.substring(1, str.length - 1);
// }

// removeFirtsEndElements(str)



        // 8-MASALA
// let arr = [1, 2, 3, 4, 5]

// function reverseArr (arr) {
//     let newArr = []
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr.push(arr[i]);
//     }

//     return newArr
// }

// console.log(reverseArr(arr));



        // 9-MASALA
// let strNum = `120120`;

// function revomeZeroFromEnd(strNum) {

//     // if (!strNum % 10 == 0) {
//     //     return `It hasn't 0 in end`
//     // }
    
//     let counter = 0;
//     for (let i = strNum.length - 1; i >= 0; i--) {
//         if (strNum[i] == 0) {
//             counter++;
//         }

//         if (strNum[i] != 0) {
//             break;
//         }
//     }

//     return strNum.substring(strNum.length - 1, counter);
// }

// console.log(revomeZeroFromEnd(strNum));



        // 10-MASALA
// let arr = [6, 2, 3, 4, 5]

// function smallestElement(arr) {
//     let min = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i]
//         }
//     }

//     return Math.pow(min, 4).toString()
// }

// console.log(smallestElement(arr));