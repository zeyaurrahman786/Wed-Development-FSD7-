// The DOM (Document Object Model) is a programming interface for web documents. In the context of JavaScript, the DOM represents the structure of an HTML or XML document as a tree of objects, where each object corresponds to a part of the document. The DOM provides a way for scripts to dynamically access and manipulate the content, structure, and style of a document.

// let user = document.getElementsByClassName('One')

// let user = document.getElementById('One')

// let user = document.querySelector('h1')

// let user = document.querySelectorAll('h1')
// for(let i of user)
// {
//     i.style.color='red'
// }








// const imageEl = document.querySelector('img');

// const arr = ['https://images.unsplash.com/photo-1705864864158-4c583edee4e3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1682695798522-6e208131916d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1705947320126-00968927ede7?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1705825179667-e0eaa7415adb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']

// let num = 0

// setInterval(function(){
//     imageEl.setAttribute('src',arr[num]);
//     num = (num + 1) % arr.length;
// }, 2000);







// let div = document.querySelector('div')

// let h1 = document.createElement('h1')
// h1.innerText ='Hello'

// div.appendChild(h1)
// console.log(div);
// // div.remove()





// Button me function dene ke liye :-

// 1st

// function fun1(){
//     console.log('Hello');
// }




// 2nd

// let btn = document.querySelector('button')
// btn.onclick=function(){
//     console.log('Hiii');
// }




// 3rd

// let btn = document.querySelector('button')
// btn.addEventListener('click',()=>{
//     console.log('Heyyyy');
// })






// let inp = document.querySelector('input')
// let p = document.querySelector('p')
//     inp.addEventListener('input',(e)=>{
//         p.innerText = e.target.value
//         // console.log(e.target.value);
//         // console.log('Hello');
//     })









// // Select input element
// const titleEl = document.getElementById('title');

// // select list element
// const listEl = document.getElementById('list');

// // select button element
// const addButtonEl = document.getElementById('add-button');

// // adding "click" event listener on button element
// addButtonEl.addEventListener('click', function() {

//   // getting the value of the input field
//   const titleText = titleEl.value;
  
//   // creating and 'li' element and adding inner text
//   const li = document.createElement('li');
//   li.innerText = titleText;

//   // add the newly created li element to the list
//   listEl.appendChild(li);

//   // clear the input field after adding li to the list
//   titleEl.value = '';

// })













// function step1(fn){
//   setTimeout(()=>{
//     console.log(fn);
//     console.log('select image');
//     fn('selectedImage')
//   },2000)
// }
// function step2(a,fn){
//   setTimeout(()=>{
//     console.log(`yha pe filter hoga ${a}`);
//     fn('filteredImage')

//   },4000)
// }  
// function step3(data,fn){
//   setTimeout(()=>{
//     console.log(`captions lagega ${data}`);
//     fn('captionsImage')

//   },4000)
// }  

// function step4(data){
//   setTimeout(()=>{
//     console.log(`post ho gyi kaun ${data}`);
//   },4000)
// }  
// step1((data)=>{
// step2(data,(filtedImage)=>{
// step3(filtedImage,(captionsImage)=>{
//   step4(captionsImage)

// })

// })
// })









function step1(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('selecttt');
      resolve('select image')
    },4000)

  })

}
function step2(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('selecttt');

      resolve('filterted')
    },4000)

  })

}
function step3(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('selecttt');

      resolve('captionssss')
    },4000)

  })

}
function step4(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('selecttt');

      resolve('postttttttt')
       

    },4000)

  })

}






     step1().
     then((data)=>{
      console.log(data);
      return step2()
     }).
     then((filtedImage)=>{
      console.log(filtedImage);
      return step3()

     }).
     then((captionsImage)=>{
      console.log(captionsImage);
      return step4()
     }).
     then((data)=>{
      console.log(data);

     })







function step1(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('selecttt');
      resolve('select image')
    },4000)

  })

}
function step2(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('selecttt');

      resolve('filterted')
    },4000)

  })

}
function step3(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('selecttt');

      resolve('captionssss')
    },4000)

  })

}
function step4(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('selecttt');

      resolve('postttttttt')
       

    },4000)

  })

}






// Asyc 

//     async  function call(){
//     await step1()
//     await step2()
//     await step3()
//     await step4()
//  }

