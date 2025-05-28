// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.

function arr (arr){
    for (let arrElement of arr) {
        document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`);
    }
}
arr([   {id: 1, name: 'John', age: 18},
            {id: 2, name: 'Jane', age: 28},
            {id: 3, name: 'Nik', age: 38},
            {id: 4, name: 'Max', age: 8},
            {id: 5, name: 'Andrii', age: 8}
])