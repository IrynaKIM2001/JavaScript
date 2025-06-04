// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Після опису, використовуючи функції масивів:
// – знайти піковий туз
//  – всі шістки
//  – всі червоні карти
//  – всі буби
//  – всі трефи від 9 та більше
// Приклад моделі об’єкту карти:
// {
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//     color:”, // ‘red’,’black’
// }

const cardSuits=['spade', 'diamond','heart', 'clubs'];
const values=['6','7','8','9','10','jack','queen','king','ace'];

const cards =[];
for(const cardSuit of cardSuits){
    for (const value of values){
        const card={cardSuit:cardSuit, value: value};
        if(cardSuit === 'diamond'||cardSuit === 'heart') {
            card.color='red';
        } else {
            card.color='black';
        }
        cards.push(card);
    }
}
console.log(cards);
// – знайти піковий туз
console.log(cards.find(value=>value.cardSuit.includes('spade')&&value.value.includes('ace')));
//  – всі шістки
console.log(cards.filter(card=>card.value==='6'));
//  – всі червоні карти
console.log(cards.filter(card=>card.color==='red'));
//  – всі буби
console.log(cards.filter(card=>card.cardSuit==='diamond'));
//  – всі трефи від 9 та більше
console.log(cards.filter(card=>card.cardSuit==='clubs'&& (card.value==='9'||card.value==='jack'||card.value==='ace'||card.value==='queen'||card.value==='king'
    ||card.value==='10')));