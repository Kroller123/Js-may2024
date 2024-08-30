//     #whXxOBlYS0H
//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
//     Інгредієнти повинні бути список під час відображення.


let url = new URL ('https://dummyjson.com/recipes')
let limit = 50
url.searchParams.append('limit' , limit)


fetch(url)
    .then(res => res.json())
    .then(({recipes})=> {
        for (let recipe of recipes) {
            console.log(recipe)
            let div = document.createElement('div')
            for (let recipeKey in recipe) {
                if (typeof recipe[recipeKey] !== 'object') {
                    let p = document.createElement('p')
                    p.innerHTML = `<b>${recipeKey}</b> : ${recipe[recipeKey]}`
                    div.appendChild(p)
                }
            }
            let ul = document.createElement('ul')
            ul.innerHTML = `<h3>instruction</h3>`
            for (let instruction of recipe.instructions) {
                let li = document.createElement('li')
                li.innerText = instruction
                ul.appendChild(li)
            }
            div.appendChild(ul)
            let ul2 = document.createElement('ul')
            ul2.innerHTML = `<h3>ingredient</h3>`
            for (let ingredient of recipe.ingredients) {
                let li = document.createElement('li')
                li.innerText = ingredient
                ul2.appendChild(li)
            }
            div.appendChild(ul2)
            let ul3 = document.createElement('ul')
            ul3.innerHTML = `<h3>tags</h3>`
            for (let tag of recipe.tags) {
                let li = document.createElement('li')
                li.innerText = tag
                ul3.appendChild(li)
            }
            div.appendChild(ul3)
            let hr = document.createElement('hr')
            console.log(1)
            document.body.append(div,hr)
        }
    })