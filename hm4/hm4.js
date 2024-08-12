// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function square(a,b) {
    return a*b
}

console.log(square(5,5))


// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

let numPi = 3.14;

function squareCircle(r){
    return numPi*r**2
}

console.log(squareCircle(5))
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function squareCylinder(r,h){
    return 2*numPi*r*h
}
console.log(squareCylinder(5,10))

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = [1,5234,123,234,'gdfgfds',true]

function arrayIteration(arr){
    for (let item of arr) {
        console.log(item)
    }
}

arrayIteration(arr)

// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createText(text){
    document.write(`<div><p>${text}</p></div>`)
}

createText('hello')
document.write(`<hr>`)
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createList(text){
    document.write('<ul>')
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}

createList('bye')
document.write(`<hr>`)
// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createListByNumber(number,text){
    document.write('<ul>')
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}

createListByNumber(6,'hi')
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

document.write(`<hr>`)

let array = [55,21,523,62,32,1664,'hello','bye','kokos',true,false]



function createListOfArray(arr){
    document.write('<ul>')
    for (const item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write('</ul>')
}

createListOfArray(array)

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
document.write(`<hr>`)

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

function createDivOfArr(array){
    for (let user of array) {
        document.write(`<div><h1>name:${user.name}</h1><h2>age:${user.age}</h2><h2>id:${user.id}</h2><hr></div>`)
    }
}
createDivOfArr(users)

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

function minNum(numbers){
    let minimalNumber = numbers[0];
    for (let number of numbers) {
        if (number < minimalNumber){
            minimalNumber = number
        }
    }

    return minimalNumber
}

console.log(minNum([1,2434,523456346,-2,5, 4, 34, 354, 23, 563]));

// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(numbers){
    let suma = 0
    for (let number of numbers) {
        suma += number
    }
    return suma
}

console.log(sum([1,2,10,22]))

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function  swap(arr,index1,index2){
    let buf = arr[index1]
    console.log(`before`, arr)
    arr[index1] = arr[index2]
    arr[index2] = buf
    console.log(`after`, arr)
    return arr

}
swap([23,44,33,22],2,1)

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH,currencyValues,exchangeCurrency){
    let exchangedSum;
    if (exchangeCurrency === 'USD') {
        exchangedSum = sumUAH / currencyValues
    } else if (exchangeCurrency === 'EURO'){
        exchangedSum = sumUAH / currencyValues
    }
    return exchangedSum
}

console.log(exchange(10000,42,'EURO'))