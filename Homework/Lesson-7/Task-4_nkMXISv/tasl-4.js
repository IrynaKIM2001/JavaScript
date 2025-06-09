// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об’єктами Client
function Client (id, name, surname , email, phone, ...products){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = products;
}
function Product (titleProduct, priseProduct){
    this.titleProduct = titleProduct;
    this.priseProduct = priseProduct;
}
let clients =[
    new Client(1,'Iryna','Koval','irashftu@gmail.com', '+380952535158',[new Product('orange',125),new Product('tomato',1545)]),
    new Client(2,'Andriy','Kulich','csdfsdf@gmail.com', '+380983526158',[new Product('orange',434),new Product('apple',545)]),
    new Client(3,'Misha','Lisovich','sdfsdfstu@gmail.com', '+380983526158',[new Product('apple',45),new Product('cucumber',44)]),
    new Client(4,'Anna','Rodovich','sdfsdsfds@gmail.com', '+380983526158',[new Product('salt',254),new Product('orange',653)]),
    new Client(5,'Alisa','Kili','sdfsdf@gmail.com', '+380983526158',[new Product('pasta',245),new Product('apple',254)]),
    new Client(6,'Anton','Vich','asdgvbc@gmail.com', '+380983526158',[new Product('orange',546),new Product('pasta',452)]),
    new Client(7,'Maria','Lis','sdgfg@gmail.com', '+380983526158',[new Product('cucumber',245),new Product('apple',568)]),
    new Client(8,'Kira','Vovk','sdfsdfdc@gmail.com', '+380983526158',[new Product('orange',3245),new Product('salt',54),new Product('cucumber',3365)]),
    new Client(9,'Vira','Lokp','sdfgvxcv@gmail.com', '+380983526158',[new Product('apple',4234),new Product('pasta',45)]),
    new Client(10,'Lilia','Tur','ukjyt@gmail.com', '+380983526158',[new Product('orange',434),new Product('apple',545)]),
]
console.log(clients);