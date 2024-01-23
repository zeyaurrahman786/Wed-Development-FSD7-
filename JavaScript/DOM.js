// The DOM (Document Object Model) is a programming interface for web documents. In the context of JavaScript, the DOM represents the structure of an HTML or XML document as a tree of objects, where each object corresponds to a part of the document. The DOM provides a way for scripts to dynamically access and manipulate the content, structure, and style of a document.

// let user = document.getElementsByClassName('One')

// let user = document.getElementById('One')

// let user = document.querySelector('h1')

// let user = document.querySelectorAll('h1')
// for(let i of user)
// {
//     i.style.color='red'
// }




const imageEl = document.querySelectorAll(img);

const arr = ['https://images.unsplash.com/photo-1705864864158-4c583edee4e3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1682695798522-6e208131916d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1705947320126-00968927ede7?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1705899312507-d951e02185fb?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']

let num = 0

setInterval(function(){
    imageEl.setAttribute('src',arr[num]);
    num = (num + 1) % arr.length;
}, 2000);

