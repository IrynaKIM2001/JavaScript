// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li)
// та виводить його через document.write

function arr_li (arr) {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
arr_li([1,2,3,4,5,6,7,8,9,'hey', 'hello', 'hi',false, false, true]);