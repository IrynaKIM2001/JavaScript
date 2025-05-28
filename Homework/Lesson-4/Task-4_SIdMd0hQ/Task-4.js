// – створити функцію, яка приймає масив та виводить кожен його елемент
function arr_log(arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr_log(arr);
