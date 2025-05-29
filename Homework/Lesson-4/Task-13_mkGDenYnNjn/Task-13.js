// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let currency = currencyValues.find(item => item.currency === exchangeCurrency);
    if (!currency) {
        return `Currency ${exchangeCurrency} not found`;
    }
    return +(sumUAH / currency.value);
}
console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));