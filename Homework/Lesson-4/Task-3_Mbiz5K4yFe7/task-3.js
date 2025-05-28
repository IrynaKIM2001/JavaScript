// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

function square (Radius, Height) {
    let result = 2*Math.PI*Radius*(Height+Radius);
    console.log(result);
    return result;
}
square(2,5)