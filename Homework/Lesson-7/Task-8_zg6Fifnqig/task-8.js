// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, sizeLeg) {
        this.name = name;
        this.age = age;
        this.sizeLeg = sizeLeg;
    }
}
class Prince{
    constructor(name, age, sizeShoe) {
        this.name = name;
        this.age = age;
        this.sizeShoe = sizeShoe;
    }
}

let cinderellas= [
    new Cinderella('Anna',32,37),
    new Cinderella('Inna',28,38),
    new Cinderella('Iryna',23,36),
    new Cinderella('Alina',24,39),
    new Cinderella('Eliza',22,41),
    new Cinderella('Liza',25,38),
    new Cinderella('Nata',52,38),
    new Cinderella('Iryna',34,37),
    new Cinderella('Anna',18,33),
    new Cinderella('Nastya',25,39),
]
console.log(cinderellas);

const prince = new Prince('Andriy',24,36);
console.log(prince);

// for (const cinderella of cinderellas) {
//     if (cinderella.sizeLeg===prince.sizeShoe) {
//         prince.wife=cinderella;
//
// }}
// console.log(prince.wife)

let cinderellaMain = cinderellas.find(cinderella=>cinderella.sizeLeg===prince.sizeShoe)
console.log(cinderellaMain);