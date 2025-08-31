// ADD CLASS 
// ClassName & ClassList
// ClassName = var.ClassName = 'className';


// 1 SELECT BY CREATING A VARIABLE
const txt = document.querySelector('.text');
// 2 USE className METHOD
// txt.className = 'red-text big-text'


// ClassList = add('class-name'), remove('class-name'), contains('class-name'), toggle('')...
// Example
// txt.classList.add('red-text');
// txt.classList.add('big-text');

// contains
//const checkClass = txt.classList.contains('xyx') // true false 

txt.classList.toggle('red-text') // toggle if have it will be remove, else it will be add


console.log(txt.classList)
console.log(txt.classList)