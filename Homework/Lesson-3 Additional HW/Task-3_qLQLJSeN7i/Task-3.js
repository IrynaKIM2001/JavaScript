// – є масив [2,17,13,6,22,31,45,66,100,-18] :
let arr =[2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while

//// let i = 0;
// // while (i < arr.length) {
// //     let ar = arr[i];
// //     console.log(ar);
// //     i++;
// // }

// 2. перебрати його циклом for

//// for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 1;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i+=2;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i=1; i<arr.length; i+=2) {
//         console.log(arr[i]);
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = 0;
// while(i<arr.length) {
//     console.log(arr[i]);
//     i+=2;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i =0; i < arr.length; i+=2) {
//     console.log(arr[i]);
// }

// 7. замінити кожне число, кратне 3, на слово “okten”

// let i = 0;
// while (i < arr.length) {
//     if(arr[i]%3===0){
//         console.log('okten');
//     }
//     else {console.log(arr[i]);}
//     i++;
// }

// 8. вивести масив у зворотньому порядку.

// for (let i=arr.length-1;i>=0;i--) {
//     console.log(arr[i]);
// }

// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)

// let i = arr.length-1;
// while (i >= 0) {
//     let ar = arr[i];
//     console.log(ar);
//     i--;
// }

// for (let i =arr.length-1; i >= 0; i--) {
//     console.log(arr[i]);
// }

// let i = arr.length-1;
// while (i >=0) {
//     console.log(arr[i]);
//     i-=2;
// }

// for (let i=arr.length-1; i>=0; i-=2) {
//         console.log(arr[i]);
// }

// let i = arr.length-2;
// while(i>=0) {
//     console.log(arr[i]);
//     i-=2;
// }

// for (let i =arr.length-2; i >=0; i-=2) {
//     console.log(arr[i]);
// }

// let i = arr.length-1;
// while (i >=0) {
//     if(arr[i]%3===0){
//         console.log('okten');
//     }
//     else {console.log(arr[i]);}
//     i--;
// }