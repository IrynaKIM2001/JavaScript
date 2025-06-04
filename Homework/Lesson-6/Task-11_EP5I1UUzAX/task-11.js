// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// Приклад моделі кінцевого об’єкту
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
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

const cr = cards.reduce((values,cards)=>{
    switch(cards.cardSuit){
        case 'diamond':
            values.diamonds.push(cards);
            break;
        case 'heart':
            values.hearts.push(cards);
            break;
        case 'clubs':
            values.clubs.push(cards);
            break;
        case 'spade':
            values.spades.push(cards);
            break;
    }
    return values
    } ,{spades:[],diamonds:[],hearts:[],clubs:[]}
);
console.log(cr)