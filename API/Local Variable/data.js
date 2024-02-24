let btn=document.querySelector("button")
let inp=document.querySelector("input")
let remove = document.querySelector("#one")
if(localStorage.getItem("data")){
    inp.value=localStorage.getItem("data")
}
btn.addEventListener("click",()=>{
    console.log("Hello world");
    let text=inp.value
    localStorage.setItem("data",text)

})
remove.addEventListener("click",()=>{
    if (localStorage.getItem("data")){
        localStorage.clear("data")
        inp.value=''
    }else{
        alert("Data not fount!")
    }
})