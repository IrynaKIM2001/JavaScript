// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arr= ['sdfsd', true, false, 'dfgdkfg',23,2535, null, 5622, 'dfgdfg','dgfghdfg']
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i]==='string'){
        console.log(arr[i])
    }}