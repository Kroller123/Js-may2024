// task 1

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

console.log('-------------task1.1----------')

let array = [2, 5, 10, true, false, true, 'hello', 'okten', 'ua', -234]
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
console.log(array[5])
console.log(array[6])
console.log(array[7])
console.log(array[8])
console.log(array[9])


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.


let fistBook = {
    title: 'Lord of the Ring',
    pageCount: 25,
    genre: 'fantasy'
}
let secondBook = {
    title: 'The Hobbit',
    pageCount: 35,
    genre: 'fantasy'
}
let thirdBool = {
    title: 'JavaScript for Web Designers',
    pageCount: 99,
    genre: 'educational'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.


let firstBook1 = {
    title: 'Lord of the Ring',
    pageCount: 25,
    genre: 'fantasy',
    authors: [{
        name: 'vasya',
        age: 25
    }, {
        name: 'petya',
        age: 24
    }]
}
let secondBook2 = {
    title: 'The Hobbit',
    pageCount: 35,
    genre: 'fantasy',
    authors: [{
        name: 'max',
        age: 20
    }, {
        name: 'dimon',
        age: 29
    }]
}
let thirdBook3 = {
    title: 'JavaScript for Web Designers',
    pageCount: 99,
    genre: 'educational',
    authors: [{
        name: 'olya',
        age: 28
    }, {
        name: 'yurii',
        age: 39
    }]
}


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

console.log('-------------task1.4----------')


let users = [
    {name: 'Oliver', username: 'Wonnd', password: '876CnsgLD4'},
    {name: 'Jon', username: 'Yllda', password: '85e45FbhYN'},
    {name: 'Conor', username: 'Juran', password: '45CC5ivjL2'},
    {name: 'Kit', username: 'Ikari', password: 'vU2f24H5Pc'},
    {name: 'Kira', username: 'Uizad', password: '9rP4G3Ex9n'},
    {name: 'Brecham', username: 'Mokil', password: '69Ys2gjEM4'},
    {name: 'Olena', username: 'Yrybb', password: 'sM356F3Avb'},
    {name: 'Lesya', username: 'Pepli', password: '3j68Y2VpNx'},
    {name: 'Thomas', username: 'Anila', password: '46BrY4cu2K'},
    {name: 'George', username: 'Kroller', password: 'm677yL8aTN'}
]

console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)


// task 2
//- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати.
// Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

// Варіант 1

let week = [
    monday = {
        morning: 10,
        day: 25,
        evening: 13
    },
    tuesday = {
        morning: 12,
        day: 22,
        evening: 14
    },
    wednesday = {
        morning: 15,
        day: 27,
        evening: 20
    },
    thursday = {
        morning: 14,
        day: 23,
        evening: 17
    },
    friday = {
        morning: 7,
        day: 14,
        evening: 10
    },
    saturday = {
        morning: 10,
        day: 18,
        evening: 12
    },
    sunday = {
        morning: 12,
        day: 20,
        evening: 16
    }
]

// Варіант 2

let week2 =[
    morning = {
        monday:25,
        tuesday:21,
        wednesday:15,
        thursday:17,
        friday:23,
        saturday:19,
        sunday:18
    },
    day2= {
        monday:27,
        tuesday:30,
        wednesday:32,
        thursday:34,
        friday:30,
        saturday:36,
        sunday:33
    },
    evening = {
        monday:29,
        tuesday:28,
        wednesday:27,
        thursday:30,
        friday:29,
        saturday:25,
        sunday:24
    }
]


// task 3
// Логічні розгалуження:

// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
console.log('-------------task3----------')

let num1 = +prompt('Your number')

if (num1 !== 0) {
    console.log('True')
} else {
    console.log('False')
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

console.log('-------------task3.1----------')

let time = +prompt('Write time')

switch (time){
    case time <= 15:
        console.log('Fist')
        break;
    case time <=30:
        console.log('Second')
        break;
    case time <=45:
        console.log('Third')
        break;
    case time <=60:
        console.log('Fourth')
        break;
    default:
        console.log('Write correct time')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

console.log('-------------task3.2----------')

let day = +prompt('What day today?')

switch (day) {
    case day <= 10:
        console.log('Fist time of month')
        break;
    case day <= 20:
        console.log('Second time of month')
        break;
    case day <= 31:
        console.log('Third time of month')
        break;
    default:
        console.log('Write correct day')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий
// номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

console.log('-------------task3.3----------')

let dayNumber = +prompt('Number of day')

switch (dayNumber) {
    case dayNumber === 0:
        console.log('Monday');
        break;
    case dayNumber === 1:
        console.log('Tuesday')
        break;
    case dayNumber === 2:
        console.log('Wednesday')
        break;
    case dayNumber === 3:
        console.log('Thursday')
        break;
    case dayNumber === 4:
        console.log('Friday')
        break;
    case dayNumber === 5:
        console.log('Saturday')
        break;
    case dayNumber === 6:
        console.log('Sunday')
        break;
    default:
        console.log('Write correct day')
        break;
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

console.log('-------------task3.3----------')

let fistNum = +prompt('Enter first number')
let secondNum = +prompt('Enter second number')

switch (true) {
    case (fistNum > secondNum):
        console.log(`Bigger first number -- ${fistNum}`)
        break;
    case (secondNum > fistNum):
        console.log(`Bigger second number -- ${secondNum}`)
        break;
    case (secondNum === fistNum):
        console.log('They are equal')
        break;
}

// task 4
// є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
//  (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).



//task 5
//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги
// іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

console.log('-------------task5----------')

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let javaScriptComplex = coursesAndDurationArray[0]

if (javaScriptComplex.monthDuration > 5) {
    console.log(`${javaScriptComplex.title} -- ${javaScriptComplex.monthDuration}`)
    console.log('Супер!!!')
}

let javaComplex = coursesAndDurationArray[1]

if (javaComplex.monthDuration > 5) {
    console.log(`${javaComplex.title} -- ${javaComplex.monthDuration}`)
    console.log('Супер!!!')
}

let pythonComplex = coursesAndDurationArray[2]

if (pythonComplex.monthDuration > 5) {
    console.log(`${pythonComplex.title} -- ${pythonComplex.monthDuration}`)
    console.log('Супер!!!')
}

let qaComplex = coursesAndDurationArray[3]

if (qaComplex.monthDuration > 5) {
    console.log(`${qaComplex.title} -- ${qaComplex.monthDuration}`)
    console.log('Супер!!!')
}

let fullStack = coursesAndDurationArray[4]

if (fullStack.monthDuration > 5) {
    console.log(`${fullStack.title} -- ${fullStack.monthDuration}`)
    console.log('Супер!!!')
}

let frontend = coursesAndDurationArray[5]

if (frontend.monthDuration > 5) {
    console.log(`${frontend.title} -- ${frontend.monthDuration}`)
    console.log('Супер!!!')
}