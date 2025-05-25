// 1. Створити пустий масив та :
let arr=[];
//     a. заповнити його 50 парними числами за допомоги циклу.

// for (let i=0; i<100; i++){
//     if(i % 2===0) {
//         arr.push(i)
//     }
// }
// console.log(arr);

//     b. заповнити його 50 непарними числами за допомоги циклу.

// for (let i=0; i<100; i++){
//     if(i % 2===1) {
//         arr.push(i)
//     }
// }
// console.log(arr);

//     c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)

//
// for (let i=0; i<20; i++){
//     let randomnumber=Math.floor(Math.random() * 100);
//     arr.push(randomnumber);
// }
// console.log(arr);

// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)

// for (let i=0; i<20; i++){
//     let randomnumber=Math.floor(Math.random() * (732-8+1))+8;
//     arr.push(randomnumber);
// }
// console.log(arr);

// 2. Вивести за допомогою console.log кожен третій елемент

// for (let i=2; i<20; i+=3){
//     console.log(arr[i]);
// }

// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.

// for (let i=2; i<20; i+=3){
//     if(arr[i]%2===0){
//         console.log(arr[i]);
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив

// let newarr=[];
//  for (let i=2; i<20; i+=3){
//     if(arr[i]%2===0){
//         newarr.push(arr[i]);
//     }
// } console.log(newarr);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним

// for (let i=0; i<20; i++){
//     if (arr[i]%2===0){
//         console.log(arr[i-1]);
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let purchases = [100, 250, 50, 168, 120, 345, 188];
//
// let total = 0;
//
// for (let i = 0; i < purchases.length; i++) {
//     total += purchases[i];
// }
//
// let average = total / purchases.length;
//
// console.log("Середній чек:", average);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let originalArray = [];
// let multipliedArray = [];
//
// for (let i = 0; i < 10; i++) {
//     let randomNumber = Math.floor(Math.random() * 100); // від 0 до 99
//     originalArray.push(randomNumber);
// }
// for (let i = 0; i < originalArray.length; i++) {
//     multipliedArray.push(originalArray[i] * 5);
// }
// console.log("Оригінальний масив:", originalArray);
// console.log("Помножений на 5:", multipliedArray);

// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.

let mixedArray = [42, "hello", true, 99, "world", false, 7, null, "123", 0];
let numbersOnly = [];

for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === 'number' && !isNaN(mixedArray[i])) {
        numbersOnly.push(mixedArray[i]);
    }
}
console.log("Масив з числами:", numbersOnly);