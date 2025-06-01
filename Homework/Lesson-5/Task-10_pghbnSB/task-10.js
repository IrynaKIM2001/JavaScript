// – створити функцію яка повертає найменьше число з масиву

let filter = (arr) => {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let arrElement = arr[i];
       if (arrElement < min) {
       min = arr[i];
       }
    }
    return min;
}
document.write(filter ([8,1,3,4,5,6,7]))