// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let word1 = 'hello world'
console.log(word1.length);

let word2 = 'lorem ipsum'
console.log(word2.length);

let word3 = 'javascript is cool'
console.log(word3.length);


console.log('---------------')

// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let upWord1 = word1.toUpperCase();
console.log(upWord1)

let upWord2 = word2.toUpperCase();
console.log(upWord2)

let upWord3 = word3.toUpperCase();
console.log(upWord3)


console.log('--------------')

// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(upWord1.toLowerCase());
console.log(upWord2.toLowerCase());
console.log(upWord3.toLowerCase());

console.log('-----------------')
// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
let dirtyStr = ' dirty string   '

console.log(dirtyStr.slice(1, 13));
console.log('-----------------')
//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


let str = 'Ревуть воли як ясла повні';

console.log(str.split(' '));
console.log('-----------------')
//
// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]

let numbersOfStr = numbers.map(number => number.toString());
console.log(numbersOfStr)

console.log('-----------------')
// #5hqyKTfmc
// - створити функцію sortNums(array,direction),
// яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//

let nums = [11, 21, 3]

let sortNums = (numbers, direction) => {
    switch (direction) {
        case 'ascending':
            console.log(numbers.sort((num1, num2) => num1 - num2))
            break;
        case 'descending':
            console.log(numbers.sort((num1, num2) => num2 - num1))
    }
}
sortNums(nums, 'ascending')
sortNums(nums, 'descending')

// ==========================
console.log('-----------------')
// #yo06d74c1C
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration));
console.log('-----------------')
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

console.log(coursesAndDurationArray.filter(month => month.monthDuration > 5))
console.log('-----------------')
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let newCourseArr = coursesAndDurationArray.map((course,index) =>{
    return {
        id: index +1,
        title: course.title,
        monthDuration: course.monthDuration
    }
})

console.log(newCourseArr)
console.log('----------------')
// =========================
//     #bolvdlhP
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

let cardSuit = ['spade', 'diamond','heart', 'clubs']
let values = [6,7,8,9,10,'jack','queen','king','ace']

let cards = []

for (let suit of cardSuit) {
    for (let value of values) {
        let card = {cardSuit:suit,value:value}
        if (suit === 'spade' || suit ==='clubs') {
            card.color = 'black'
        } else {
            card.color = 'red'
        }
        cards.push(card)
    }
}

// описати колоду карт (від 6 до туза без джокерів)
console.log(cards)
// - знайти піковий туз
console.log(cards.find(card =>card.cardSuit === 'spade' && card.value === 'ace'))
// - всі шістки
console.log(cards.filter(card => card.value === 6))
// - всі червоні карти
console.log(cards.filter(card => card.color === 'red'))
// - всі буби
console.log(cards.filter(card=>card.cardSuit === 'diamond'))
// - всі трефи від 9 та більше
console.log(cards.filter(card => card.cardSuit === 'clubs' && card.value !== 6 && card.value !== 7 && card.value !== 8 && card.value !== 9))

//
// =========================
//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
console.log('--------------')

let reducedCard = cards.reduce((accumulator, card) => {
    switch (card.cardSuit){
        case 'spade':
            accumulator.spades.push(card);
            break;
        case 'diamond':
            accumulator.diamonds.push(card);
            break;
        case 'heart':
            accumulator.hearts.push(card);
            break;
        case 'clubs':
            accumulator.clubs.push(card);
            break;
    }


    return accumulator
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});

console.log(reducedCard)

// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray

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
            'java',]
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в яких в modules є sass

let filterOfSass = coursesArray.filter(course => course.modules.includes('sass'));
console.log(filterOfSass)

// --написати пошук всіх об'єктів, в яких в modules є docker

let filterOfDocker = coursesArray.filter(course => course.modules.includes('docker'))
console.log(filterOfDocker)