let ul = document.querySelector('ul');
let array = [one,two,three]
array.map((i,index)=>{
    console.log(index,"Hello");
    let li = document.createElement('li');
    li.innerText = i;
    li.addEventListener(click,()=>{
        ul.appendChild(index);
    })
})