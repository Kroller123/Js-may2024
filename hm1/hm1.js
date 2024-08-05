// task 1
// - Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

console.log('-------------task1--------------');

let word1 = 'hello';
console.log(word1)

let word2 = 'owu';
console.log(word2)

let word3 = 'com';
console.log(word3)

let word4 = 'ua';
console.log(word4)

let num1 = 1;
console.log(num1)

let num2 = 10;
console.log(num2)

let num3 = -999;
console.log(num3)

let num4 = 123;
console.log(num4)

let numPi = 3.14;
console.log(numPi)

let num5 = 2.7;
console.log(num5)

let num6 = 16;
console.log(num6)

let bool1 = true;
console.log(bool1)

let bool2 = false;
console.log(bool2)

// task 2
// - Створити 3 змінних
// firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації)

console.log('-------------task2--------------');

let firstName = 'Ярослав';
let lastName = 'Терновий';
let middleName ='Віталійовичь';

let fullName = `${lastName} ${firstName} ${middleName} `;
console.log(fullName);

// task 3
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;


console.log('-------------task3--------------');

let a = 100;
console.log(typeof a);

let b = '100';
console.log(typeof b);

let c = true;
console.log(typeof c);



// task 4
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

console.log('-------------task4--------------');

let name = prompt('Whats your name?')
console.log(name)

let middleName2 = prompt('Wats your middle name?')
console.log(middleName2)

let age = +prompt('How old are you?')
console.log(age)