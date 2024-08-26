// =========================
//
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок,
// блок розділити блоками, в яких будуть зберігатись
// значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------



let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let divOfCourse = document.createElement('div')

for (let course of coursesArray) {
    let headDiv = document.createElement('div')
    let h2ForHeadDiv = document.createElement('h2')
    h2ForHeadDiv.innerText = `Title : ${course.title}`
    headDiv.appendChild(h2ForHeadDiv)


    let mainDiv = document.createElement('div')
    mainDiv.style.display = 'flex'


    let firstDivInMainDiv = document.createElement('div')
    let pForFistDiv = document.createElement('p')
    pForFistDiv.innerHTML = `<b>MonthDuration</b> ---- ${course.monthDuration}`
    firstDivInMainDiv.appendChild(pForFistDiv)


    let secondDivInMainDiv = document.createElement('div')
    let pForSecondDiv = document.createElement('p')
    pForSecondDiv.innerHTML = `<b>HourDuration</b> ---- ${course.hourDuration}`
    secondDivInMainDiv.appendChild(pForSecondDiv)
    secondDivInMainDiv.style.marginLeft = '50px'


    mainDiv.append(firstDivInMainDiv,secondDivInMainDiv)


    let ul = document.createElement('ul')

    for (let module of course.modules) {
        let li = document.createElement('li')
        li.innerText = module
        li.style.fontSize = '20px'

        ul.appendChild(li)
    }

    divOfCourse.append(headDiv,mainDiv,ul)
}


document.body.appendChild(divOfCourse)