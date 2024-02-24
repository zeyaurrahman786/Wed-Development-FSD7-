let button = document.querySelector('button')
let input = document.querySelector('input')
let div = document.querySelector('#list')

button.addEventListener('click',()=>{
    // console.log('Hello');
    let searchText = input.value;
    fetch (`https://api.tvmaze.com/search/shows?q=${searchText}`)
    .then((data)=>{
        return data.json();
    })
    .then((res)=>{
        console.log(res[0].show.image.original);
        show(res);
    })
})

function show(data)
{
    // console.log(data[0].show.image.original,'Hiiii');
    // let img = document.createElement('img');
    // img.setAttribute('src',data[0].show.image.original)

    data.map((a)=>{
    let img = document.createElement('img');
    console.log(a.show.image.original,'Heyyy');
    div.append(img);
    })
    // div.append(img);
}