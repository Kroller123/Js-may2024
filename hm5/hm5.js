// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій
//
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let plus = (a, b) => a * b

console.log(plus(5, 5))


console.log('------------------')
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

let squareCircle = r => {
    let numPi = 3.14
    return numPi * r ** 2
}

console.log(squareCircle(5))

console.log('------------------')
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let squareCylinder = (r, h) => {
    let numPi = 3.14
    return 2 * numPi * r * h
}

console.log(squareCylinder(5, 10))


console.log('------------------')
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

let iteratorOfArray = arr => {
    for (let item of arr) {
        console.log(item)
    }
}

iteratorOfArray([5, 4, 5, 2, 5, 7, 2, 3, 6, 7])

console.log('-------------------')

// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let createParagraph = text => document.write(`<div><p>${text}</p></div>`)

createParagraph('hello')

document.write('<hr>')

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createList = text => document.write(`<div><ul><li>${text}</li><li>${text}</li><li>${text}</li></ul></div>`)

createList('Hi')
document.write('<hr>')
// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let createListFromNum = (text, number) => {
    document.write('<ul>')
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text} --- ${i}</li>`)
    }
    document.write('</ul>')
}

createListFromNum('bye', 5)
document.write('<hr>')
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let createListFromArray = arr => {
    document.write('<ul>')
    for (let item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write('</ul>')
}

createListFromArray([43, 534, 5234, 7632, 5, 123, 'Hello', 'Bye', true, false])

document.write('<hr>')

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями
// id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


let users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id: 5},
    {name: 'anya', age: 31, id: 6},
    {name: 'oleg', age: 28, id: 7},
    {name: 'andrey', age: 29, id: 8},
    {name: 'masha', age: 30, id: 9},
    {name: 'olya', age: 31, id: 10},
    {name: 'max', age: 31, id: 11}
];

let createUser = users => {
    for (let user of users) document.write(`<div><p>Id: <b>${user.id}</b></p><p>Name: <b>${user.name}</b></p><p>Age: <b>${user.age}</b></p><hr></div>`)
}

createUser(users)


//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

let minimalNumFromArray = numbers => {
    let minimalNum = numbers[0]
    for (let number of numbers) {
        if (number < minimalNum) {
            minimalNum = number
        }
    }
    return minimalNum
}

console.log(minimalNumFromArray([5, 4, 3, 1, -200, 5, 7, 4, 2, 6]));
console.log('-------------------')
// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення
// елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sumNumbers = numbers => {
    let suma = 0
    for (let number of numbers) {
        suma += number
    }
    return suma
}

console.log(sumNumbers([1, 2, 10]))
console.log('-------------------')
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr, i1, i2) => {
    let buffer = arr[i1]
    arr[i1] = arr[i2]
    arr[i2] = buffer
    return arr
}

console.log(swap([11, 22, 33, 44], 2, 0))

console.log('-------------------')

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH, currencyValue, exchangeCurrency) => {
    let exchangeSum;
    if (exchangeCurrency === 'USD') {
        exchangeSum = sumUAH / currencyValue
    } else if (exchangeCurrency === ' EURO') {
        exchangeSum = sumUAH / currencyValue
    }
    return exchangeSum
}

console.log(exchange(10000, 40, 'USD'));