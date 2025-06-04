// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = ‘Ревуть воли як ясла повні’;
// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]
let stringToarray=(str)=>{
    if (str){
        let arr = str.split(' ');
        return arr;
    }
    return [''];
}
console.log(stringToarray('Ревуть воли як ясла повні'));