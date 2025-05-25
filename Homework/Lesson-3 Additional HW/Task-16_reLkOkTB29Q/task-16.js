// створити масив книжок (назва, кількість сторінок, автори , жанри).
let books= [
    {title:'Harry Potter', pageCount: 234, authors:['J. K. Rowling','Andriy'], genres:['fantasy','fiction','drama']},
    {title:'Night road', pageCount: 433, authors:'Kristin Hannah', genres:['fantasy','fiction','drama', 'dark']},
    {title:'The windows promise', pageCount: 123, authors:'Christelle Dabos', genres:['fiction','drama', 'dark']},
    {title:'The witcher', pageCount: 123, authors:' Andrzej Sapkowski', genres:['fantasy','fiction']},
    {title:'The Lord of the Rings', pageCount: 563, authors:' J. R. R. Tolkien', genres:['fantasy','fiction']}
]
// – знайти найбільшу книжку.

// let biggestbook=books[0];
// for (let i = 1; i < books.length; i++) {
//     if(books[i].pageCount>biggestbook.pageCount){
//         biggestbook=books[i];
//     }
// }console.log(biggestbook);

// – знайти книжку/ки з найбільшою кількістю жанрів

// let bookmostgenres = books[0];
// for (let i = 1; i < books.length; i++) {
//     if(books[i].genres.length > bookmostgenres.genres.length) {
//         bookmostgenres=books[i];
//     }
// }console.log(bookmostgenres);

// – знайти книжку/ки з найдовшою назвою

// let bookmosttitle = books[0];
// for (let i = 1; i < books.length; i++) {
//     if(books[i].title.length > bookmosttitle.title.length) {
//         bookmosttitle=books[i];
//     }
// }console.log(bookmosttitle);

// – знайти книжку/ки, які писали 2 автори

// let booksWithTwoAuthors = [];
// for (let i = 0; i < books.length; i++) {
//     const current = books[i];
//     if (Array.isArray(current.authors) && current.authors.length === 2) {
//         booksWithTwoAuthors.push(current);
//
//     }
// }
//     console.log(booksWithTwoAuthors)


// – знайти книжку/ки, які писав 1 автор

// let booksWithOneAuthor = [];
// for (let i = 0; i < books.length; i++) {
//     const current = books[i];
//     if (
//         typeof current.authors === "string"
//     ) {
//         booksWithOneAuthor.push(current);
//     }
// }
// console.log(booksWithOneAuthor);
