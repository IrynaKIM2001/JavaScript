// – Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let arr1=[];
// for (let i = 0; i < arr.length; i++) {
//     arr1.push(arr[i]);
//     console.log(arr1[i]);
// }

// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.

// let letters=[ 'a', 'b', 'c'];
// let word = '';
// for (let i = 0; i < letters.length; i++) {
//     word += letters[i];
// }
// console.log(word);

// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.

// let letters=[ 'a', 'b', 'c'];
// let word = '';
// let i = 0;
// while (i < letters.length) {
//     word += letters[i];
//     i++;
// }
// console.log(word);

// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.

let letters=[ 'a', 'b', 'c'];
let word = '';

for (let letter of letters) {
  word += letter;
}
console.log(word);
