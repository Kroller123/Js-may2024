// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.
let url = new URL ('https://dummyjson.com/carts')
let limit = 50
url.searchParams.append('limit' , limit)

fetch(url)
    .then(res => res.json())
    .then(({carts})=> {
        for (let cart of carts) {
            console.log(cart)
            let div = document.createElement('div')
            let maidDiv = document.createElement('div')
            let productDiv = document.createElement('div')

            let p1 = document.createElement('p')
            p1.innerHTML = `<b>id</b> : ${cart.id}`
            let p2 = document.createElement('p')
            p2.innerHTML = `<b>discountedTotal</b> : ${cart.discountedTotal}`

            for (let product of cart.products) {
                let ul = document.createElement('ul')
                ul.innerHTML = `<b>Product</b> -----`
                for (let productKey in product) {
                    let li = document.createElement('li')
                    li.innerHTML = `${productKey} : ${product[productKey]}`
                    ul.appendChild(li)
                }
                productDiv.appendChild(ul)
            }

            let p3 = document.createElement('p')
            p3.innerHTML = `<b>total</b> : ${cart.total}`
            let p4 = document.createElement('p')
            p4.innerHTML = `<b>totalProducts</b> : ${cart.totalProducts}`
            let p5 = document.createElement('p')
            p5.innerHTML = `<b>totalQuantity</b> : ${cart.totalQuantity}`
            let p6 = document.createElement('p')
            p6.innerHTML = `<b>userId</b> : ${cart.userId}`
            let hr = document.createElement('hr')

            maidDiv.append(p1,p2,productDiv,p3,p4,p5,p6,hr)
            div.appendChild(maidDiv)
            document.body.appendChild(div)
        }
    })


//
