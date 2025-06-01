// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let currency = null;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            currency = currencyValues[i];
            break;
        }
    }
    if (!currency) {
        return `Currency ${exchangeCurrency} not found`;
    }
    return +(sumUAH / currency.value);
}
console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));