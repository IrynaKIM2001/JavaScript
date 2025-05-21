let products = [
    {
    title: 'milk',
    price: 22,
    image: 'https://drinkmilk.co.uk/wp-content/uploads/2020/05/milk_2pint.png'
    },
{
    title: 'juice',
    price: 27,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
},
{
    title: 'tomato',
    price: 47,
    image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
},
{
    title: 'tea',
    price: 15,
    image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/twn/twn26784/y/64.jpg'
},
];
for (const product of products) {
    document.write(`
    <div class="product-card">
        <h3 class="product-title">${product.title}. Price – ${product.price}</h3>
        <img src="${product.image}" alt="Product" class="product-image">
    </div>
`);
}

