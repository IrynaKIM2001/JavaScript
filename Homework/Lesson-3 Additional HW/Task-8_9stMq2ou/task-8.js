// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let arr= ['sdfsd', true, false, 'dfgdfg',23,2535, null, 5622, 'dfgdfg','dgfgdfg']
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i]==='number'){
        console.log(arr[i])
    }}