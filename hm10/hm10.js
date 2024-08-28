// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//

let btn = document.getElementById('btn')

btn.onclick = function () {
    document.getElementById('text').remove()
}


//
//         #j693ca8
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//

let ageBtn = document.getElementById('ageBtn')

ageBtn.onclick = function () {
    let age = document.getElementsByTagName('input')
    if (age[0].value >= 18) {
        console.log('Повнолітній')
    } else {
        console.log('Малюк')
    }
}

// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
//

let form = document.forms.f1;


let saveButton = form.saveButton
saveButton.addEventListener('click', (e) => {
    e.preventDefault()
    let nameValue = form.name.value;
    let surnameValue = form.surname.value;
    let ageValue = form.age.value;
    let user = {nameValue, surnameValue, ageValue}
    let div = document.getElementById('user')
    div.innerHTML = `<p>Name: ${user.nameValue}</p><p>Surname: ${user.surnameValue}</p><p>Age : ${user.ageValue}</p>`
})


// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
//

let uploadDiv = document.getElementById('uploadPage')

let curNum = +localStorage.getItem('number');
curNum += 1
localStorage.setItem('number', curNum)
uploadDiv.innerText = curNum

// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні
// якої в локальне сховще, в масив sessionsList зберігається
// інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html
// (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про
// відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
//
//


// В другому файлі рішення =)


//
// #Jg0gPO00
// створити конвертор ваги з кг в фунти.
// данні заповнюються через інпут. При введенні
// даних обрахунок стається миттєво, без натискань додаткових кнопок

let changeValue = document.getElementById('changeValue');
let resultH1 = document.getElementById('result')
changeValue.oninput = function () {
    resultH1.innerText = `Result = ${+this.value * 2.2}`
}

//
// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію,
// які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
//

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

localStorage.setItem('users', JSON.stringify(users))


let addToLocalStorage = (arrayName, objToAdd) => {
    let localName = localStorage.getItem(arrayName);
    if (!localName) {
        throw new Error('not have array of name')
    } else {
        let parseArray = JSON.parse(localName) || [];
        if (typeof objToAdd === 'object') {
            parseArray.push(objToAdd)
        }
        localStorage.setItem(arrayName, JSON.stringify(parseArray))
    }
}

addToLocalStorage('users', {name: 'dawsfgtged', age: 20, status: true})
addToLocalStorage('users', {name: 'dawdassfgtged', age: 220, status: true})
addToLocalStorage('users', 123)
//
//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//

let tabelForm = document.forms.tabelForm;
let tabel = document.getElementById('table')



tabelForm.onsubmit = function (e) {
    e.preventDefault();
    let linesValue = +tabelForm.lines.value;
    let cellsValue = +tabelForm.cells.value;
    let textValue = tabelForm.text.value;
    for (let i = 0; i < cellsValue; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < linesValue; j++) {
            let td = document.createElement('td')
            td.innerText = textValue
            tr.appendChild(td)
        }


        tabel.appendChild(tr)
    }
}


//
//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
//
//
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів