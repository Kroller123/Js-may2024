// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function  User(id,name,surname,email,phone) {
    this.id = id;
    this.name = name;
    this.surname= surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(9,'kostya','pekuhjgjt','fdljijgjhkjfs@gmail.com',100324500),
    new User(1,'vasya','kfjdskjfhsjdf','fdffdafads@gmail.com',120500),
    new User(3,'petya','pefdsfsdsdgasdggt','fduytututyfs@gmail.com',100540),
    new User(8,'borya','plkuoiyet','fdfskafkjdfh@gmail.com',10042500),
    new User(10,'oleg','pesngjksdbgkdat','fdfghfhjs@gmail.com',100509760),
    new User(2,'kolya','pfsdfsdfdset','fytuitdfs@gmail.com',103500),
    new User(4,'kit','psdgasdgsdaet','fdutyufs@gmail.com',100550),
    new User(6,'lera','pegasdgsdgsdgt','fdfmhvms@gmail.com',1004500),
    new User(5,'max','peagsdgasdgsdt','fdmvmghfs@gmail.com',1020500),
    new User(7,'dima','pehdsfjtyjrt','fdfjklhs@gmail.com',1005300),
]

console.log(users)

//
// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//

let filteredUsers = users.filter(user => user.id  % 2 === 0);

console.log(filteredUsers)



// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//

let sortedUsers = users.sort((user1, user2) => user1.id - user2.id);

console.log(sortedUsers);

// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//

class Client {
    constructor(id,name,surname,email,phone,products) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = products
    }
}

let clients = [
    new Client(1,'vasya','hjgdshgdas','kjdadw@gmail.com',1202000,['iphone','tv','ps4']),
    new Client(2,'gsdfsdfds','hjgdsgdfhfsghgdas','kjdadw@gmail.com',10102000,['samsung','ps5']),
    new Client(3,'fdsfsdfsd','hjgdshgdas','kjdadw@gmail.com',10020070,['iphone 15 pro','tv']),
    new Client(4,'dsdasdasf','hjgdshbsfgdas','kjdadw@gmail.com',10082000,['Fifa24','ps5']),
    new Client(5,'vafdfsdfassya','hjgdshsdtebsgdas','kjdadw@gmail.com',19002000,['GTA5','controller','ps4']),
    new Client(6,'vaasdfgjfgsya','hjgfhedshgdas','kjdadw@gmail.com',10029000,['dyson','ployka']),
    new Client(7,'vasyfdbsfa','hjgdshgdas','kjdadw@gmail.com',100200020,['PC','Monitor','mouse']),
    new Client(8,'vagwrywetsya','hjgdshgdas','kjdadw@gmail.com',100212000,['game desk','chair']),
    new Client(9,'vasysdhweta','hjgdshgdas','kjdadw@gmail.com',100205234500,['adapter','GTA5']),
    new Client(10,'vawdgesya','hjgdshgdas','kjdadw@gmail.com',10020024130,['mouse','GTX 4050','ryzen 7']),
]

console.log(clients)

//
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//

let sortedClients = clients.sort((client1, client2)=> client2.order.length - client1.order.length);

console.log(sortedClients)

//
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з
// властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
function Car (model,producer,year,maxSpeed,engValue) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engValue = engValue;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        console.log('model:',this.model)
        console.log('producer:',this.producer)
        console.log('year:',this.year)
        console.log('maxSpeed:',this.maxSpeed)
        console.log('engineValue:',this.engValue)
    };
    this.increaseMaxSpeed = function (newSpeed) {
        console.log(this.maxSpeed)
        if (newSpeed>=0) console.log(this.maxSpeed += newSpeed);
    };
    this.changeYear = function (newYear) {
        console.log(this.year)
        if (newYear > 1900)  console.log(this.year = newYear)
    };
    this.addDriver = function (driver) {
        if (driver) console.log(this.driver = driver);
    }
}



let car = new Car('bmw','germany',2020,220,2000)
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
car.drive()
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
car.info()
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
car.increaseMaxSpeed(20)
// -- changeYear (newValue) - змінює рік випуску на значення newValue
car.changeYear(2015)
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
car.addDriver({name:'vasya',age:20})

console.log(car)

//
// #5kla3yMpgp
// - (Те саме, тільки через клас)


class CarFactory {
    constructor(model,producer,year,maxSpeed,engValue) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engValue = engValue;
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годин`)
        };
        this.info = function () {
            console.log('model:',this.model)
            console.log('producer:',this.producer)
            console.log('year:',this.year)
            console.log('maxSpeed:',this.maxSpeed)
            console.log('engineValue:',this.engValue)
        };
        this.increaseMaxSpeed = function (newSpeed) {
            console.log(this.maxSpeed)
            if (newSpeed > 0) this.maxSpeed += newSpeed
        };
        this.changeYear = function (newYear) {
            console.log(this.year)
            if (newYear > 1900) console.log(this.year = newYear);
        };
        this.addDriver = function (driver) {
            if (driver) console.log(this.driver = driver);
        }

    }
}
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
let carFromFactory = new CarFactory('bmw','germany',2020,220,2000);
console.log(carFromFactory)
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
carFromFactory.drive()
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
carFromFactory.info()
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості назначення newSpeed
carFromFactory.increaseMaxSpeed(23)
// -- changeYear (newValue) - змінює рік випуску на значення newValue
carFromFactory.changeYear(2000)
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

carFromFactory.addDriver({id:1,name:'petya',age:25})
console.log(carFromFactory)

//
//
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
//

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, shoesFinded) {
        this.name = name;
        this.age = age;
        this.shoesFinded = shoesFinded;
    }
}


let cinderellas = [
    new Cinderella('karina',26,33),
    new Cinderella('sonya',23,34),
    new Cinderella('lera',24,35),
    new Cinderella('kira',27,36),
    new Cinderella('inna',29,37),
    new Cinderella('lyda',30,38),
    new Cinderella('emma',22,39),
]

let prince = new Prince('kolya',27,33)

let findOfShoes = cinderellas.find(cinderella=>cinderella.footSize === prince.shoesFinded);
prince.wife = findOfShoes
console.log(prince)

//
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter


Array.prototype.myForEach = function (back) {
    for (let item of this) {
        back(item)
    }
}
let arrayNum = [5,2,3,5,6]
arrayNum.myForEach(number => console.log(number))

Array.prototype.myFilter = function (restrictions) {
    let filteredArray = []
    for (let item of this) {
        if (restrictions(item)){
            filteredArray.push(item)
        }
    }
    return filteredArray
}

console.log(users.myFilter(user => user.id % 2 !== 0));