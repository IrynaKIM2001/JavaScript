// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об’єктами new User(….)

function User(id, name, surname , email, phone){
    this.id = id;
    this.name= name;
    this.surname= surname;
    this.email= email;
    this.phone= phone;
}

let users=[
    new User(1,'Iryna','Koval','irashftu@gmail.com', '+380952535158'),
    new User(2,'Andriy','Kulich','csdfsdf@gmail.com', '+380983526158'),
    new User(3,'Misha','Lisovich','sdfsdfstu@gmail.com', '+380983526158'),
    new User(4,'Anna','Rodovich','sdfsdsfds@gmail.com', '+380983526158'),
    new User(5,'Alisa','Kili','sdfsdf@gmail.com', '+380983526158'),
    new User(6,'Anton','Vich','asdgvbc@gmail.com', '+380983526158'),
    new User(7,'Maria','Lis','sdgfg@gmail.com', '+380983526158'),
    new User(8,'Kira','Vovk','sdfsdfdc@gmail.com', '+380983526158'),
    new User(9,'Vira','Lokp','sdfgvxcv@gmail.com', '+380983526158'),
    new User(10,'Lilia','Tur','ukjyt@gmail.com', '+380983526158'),

]
console.log(users);