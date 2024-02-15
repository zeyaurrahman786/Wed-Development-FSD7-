/* API :- 

API stands for Application Programming Interface. It is a set of rules, protocols, and tools that allows different software applications to communicate with each other. APIs define the methods and data formats that developers can use to interact with a software component or service, abstracting away the underlying implementation details. 

APIs are commonly used in web development to enable interaction between different web services or to integrate third-party services into an application. They can also be used within software systems to facilitate communication between different modules or layers. APIs can be provided by operating systems, libraries, frameworks, or web services, and they are essential for enabling interoperability and building scalable, modular software systems.

*/



let div = document.querySelector('div')
// fetch('https://jsonplaceholder.typicode.com/todos')
fetch('https://dummyjson.com/products')
.then((data)=>{
 // console.log(data);
    return data.json();

}).then((res)=>{
    console.log(res.products);
    fun1(res)

}).catch((error)=>{
    console.log(error);

})

function fun1(data){
    // console.log(data);
    data.map((res)=>{
        let h1 = document.querySelector('h1')
        let h2 = document.querySelector('h2')
        h1.innerText = res.id
        h2.innerText = res.title
        div.append(h1,h2)
    })
}






  













/* JSON :-

JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is based on a subset of the JavaScript programming language, but JSON is language-independent, making it a popular choice for data exchange between different programming languages and systems.

JSON represents data as key-value pairs, similar to how objects are represented in JavaScript. It supports various data types, including strings, numbers, booleans, arrays, and objects. Here's an example of JSON data:


{
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "hobbies": ["reading", "traveling", "photography"],
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "country": "USA"
  }
}


In this example:

"name", "age", and "isStudent" are key-value pairs with string keys and corresponding values.
"hobbies" is an array containing strings.
"address" is an object containing nested key-value pairs.
JSON is commonly used in web development for exchanging data between a client and a server in a web application, as well as for configuration files and API responses. It is supported by most programming languages through built-in libraries or third-party packages.

*/