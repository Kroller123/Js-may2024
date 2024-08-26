// #8Nmt60ZT
// - створити блок,
let div  = document.createElement('div')
//     - додати йому класи wrap, collapse, alpha, beta
div.classList.add('wrap', 'collapse', 'alpha', 'beta')
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.backgroundColor = 'black'
div.style.color = 'silver'
div.style.fontSize = '25px'

div.style.width = '200px'
div.style.height = '200px'

// - додати цей блок в body.

document.body.appendChild(div)

// - клонувати його повністю, та додати клон в body.


let cloneFromDiv = div.cloneNode(true)

document.body.appendChild(cloneFromDiv)

//
//     #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let array =  ['Main','Products','About us','Contacts']


let ulForArray = document.createElement('ul')

for (let item of array) {
    let li = document.createElement('li')
    li.innerText = item
    ulForArray.appendChild(li)
}
document.body.appendChild(ulForArray)


//
// #jeBqHV525U5
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration

let divOfCourse = document.createElement('div')

for (let item of coursesAndDurationArray) {
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    h1.innerText = item.title
    let h2 = document.createElement('h2')
    h2.innerText = item.monthDuration
    div.append(h1,h2)
    divOfCourse.appendChild(div)
}

document.body.appendChild(divOfCourse)

// Завдання робити через цикли.
//
// =========================
//     #Kx1xgoKy8
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let divOfCourse2 = document.createElement('div')

for (let item of coursesAndDurationArray) {
    let div = document.createElement('div')
    div.classList.add('item')
    let h1 = document.createElement('h1')
    h1.classList.add('heading')
    h1.innerText = item.title
    let p = document.createElement('p')
    p.classList.add('description')
    p.innerText = item.monthDuration
    div.append(h1,p)
    divOfCourse2.appendChild(div)
}

document.body.appendChild(divOfCourse2)



