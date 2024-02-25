let btn = document.querySelector('button')
let inp = document.querySelector('input')
let ul = document.querySelector('ul')

btn.addEventListener('click',()=>{
    let text = inp.value
    let li = document.createElement('li')
    li.innerText = text
    ul.append(li)
    inp.value =''
})
    