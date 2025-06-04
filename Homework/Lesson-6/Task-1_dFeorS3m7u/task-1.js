// – Знайти та вивести довжину наступних стрінгових значень
//  ‘hello world’
// ‘lorem ipsum’
// ‘javascript is cool’

let i1 =  'hello world';
console.log(i1.length);
let i2 = 'lorem ipsum';
console.log(i2.length);
let i3 = 'javascript is cool';
console.log(i3.length);

let string= [i1,i2,i3];
    for (let i of string){
        console.log(i.length);
}