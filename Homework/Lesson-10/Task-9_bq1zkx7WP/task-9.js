// (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення
// “100грн”
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження,
//     які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається

const priceKey = 'price';
const timeKey = 'lastUpdate';
const now = Date.now();
const priceBlock = document.getElementById('priceBlock');

let lastUpdate = localStorage.getItem(timeKey);
let currentPrice = localStorage.getItem(priceKey);

if (!lastUpdate || !currentPrice) {
    currentPrice = 100;
    lastUpdate = now;
    localStorage.setItem(priceKey, currentPrice);
    localStorage.setItem(timeKey, lastUpdate);
} else {
    const secondsPassed = (now - parseInt(lastUpdate)) / 1000;
    if (secondsPassed >= 10) {
        currentPrice = parseInt(currentPrice) + 10;
        localStorage.setItem(priceKey, currentPrice);
        localStorage.setItem(timeKey, now);
    }
}
priceBlock.textContent = currentPrice + ' грн';