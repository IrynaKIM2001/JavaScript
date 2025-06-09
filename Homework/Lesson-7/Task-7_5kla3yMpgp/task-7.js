// – (Те саме, тільки через клас)
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car

class Car {
    constructor(model,creator,yearProduce, maxSpeed,volumeEngine){
    this.model = model;
    this.creator = creator;
    this.yearProduce = yearProduce;
    this.maxSpeed = maxSpeed;
    this.volumeEngine = volumeEngine;
    this.drive= function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info= function () {
        for (const key in this){
            console.log(key, this[key])
        }
    };
    this.increaseMaxSpeed = function(newSpeed){
        if (newSpeed > 0) this.maxSpeed = newSpeed+this.maxSpeed;
    };
    this.changeYear = function(newYear){
        if (newYear>1815) {this.yearProduce = newYear;}
    }
    this.addDriver= function(driver){
        if (driver){this.driver = driver;}
    }
}}
let cars = new Car('mitsubisy','Japan',2015,256,254);

console.log(cars);
cars.drive();
cars.info();
cars.increaseMaxSpeed(255);
cars.changeYear(2016);
cars.addDriver({});
console.log(cars);