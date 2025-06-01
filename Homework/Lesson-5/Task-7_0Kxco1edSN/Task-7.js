// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

let ul_log = (text,count_li) => {
    document.write('<ul>');
    for (let i=0; i < count_li; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
ul_log('Hello World',50)