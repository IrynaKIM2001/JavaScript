// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr, I1,I2) => {
    if (I1 < arr.length && I2 < arr.length)
    {
    let temp = arr[I1];
    arr[I1] = arr[I2];
    arr[I2] = temp;
    return arr;
    }
    return '!!!!!!!'
}
console.log(swap([11, 22, 33, 44], 0, 1));