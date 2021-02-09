let a = document.querySelector('.link');

//console.log(a.innerText);

// console.log(a.parentNode);

//console.log(a.parentNode.parentNode); //html

// console.log(a.parentNode.parentNode.parentNode); //Document

// console.log(a.parentNode.parentNode.childNodes); 

// console.log(a.parentNode.parentNode.firstChild); //head

// console.log(a.firstChild); // texto "link text"

// console.log(a.parentNode.parentNode.lastChild); // body

// console.log(a.parentNode.firstChild.nextSibling);

//console.log(a.parentNode.parentNode.firstChild.nextSibling.firstChild.nextSibling);

console.log(a.parentNode.parentNode.firstChild.nextSibling.previousSibling);