/*
// DOM - used to manipulate html tags
let val;
// Document object
val = document;
val = document.all;
val = document.all[5];
val = document.all.length;
val = document.head;
val = document.domain;
val = document.contentType;


val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.scripts;

// val = document.scripts[1];
// val = document.scripts[2].getAttribute('src');

console.log(val);
let scriptsArr = Array.from(val);
console.log(scriptsArr);

// DOM Selectors - Single element
let val;
val = document.getElementById('task-title');
val = document.getElementById('task-title').id;
val = document.getElementById('task-title').className;

document.getElementById('task-title').style.background = "#445";
document.getElementById('task-title').style.color = "red";

document.getElementById('task-title').textContent = 'Task Column';
document.getElementById('task-title').innerText = 'My tasks';
document.getElementById('task-title').innerHTML = '<span style="color:blue"><b>Task List<b><span>';

val = document.querySelector('#task-title');
val = document.querySelector('.collection-item');
val = document.querySelector('h5');
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'green';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(3)').textContent = 'Hello';
document.querySelector('li:nth-child(odd)').style.background = 'yellow';
document.querySelector('li:nth-child(even)').style.background = 'black';
console.log(val);


// DOM Selectors - Single element
let val;

val = document.getElementsByClassName('collection-item');
val[2].style.color = 'blue';
console.log(val);
const listItems = document.querySelector('ul').getElementsByClassName('collection-item')

console.log(listItems);

val = document.getElementsByTagName('li');
val[2].style.color = 'blue';

val = Array.from(val);

val.forEach(function(v,index){
  console.log(v.style);
  v.textContent = `${index}:item`;
})

console.log(val);
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

val = document.querySelectorAll('ul.collection li.collection-item');

val.forEach(function(v,index){
  console.log(v);
  v.textContent = `${index}:it`;

})
console.log(val);

// Traverse DOM
let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');
listItem.style.color = 'blue';
// val = listItem;
val = list;

//get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeType;
val = list.childNodes[1].nodeName;


val = list.children;
val = list.children[0];
list.children[1].textContent = 'Hello';

list.children[3].children[0].id = 'test-link';
val = list.children[3].children;

val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

// get parents
val = listItem.parentNode;
val = listItem.parentElement.parentElement;

//get sibilings
val = listItem.nextSibling;
val = listItem.nextElementSibling;

val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);

// Creating Elements

const li = document.createElement('li');
li.className='collection-item';
li.id = 'new-item';
li.setAttribute('title','New Item');

li.appendChild(document.createTextNode('Hello World'));
const link = document.createElement('a');
link.className='delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';

li.appendChild(link);
document.querySelector('ul.collection').appendChild(li);
console.log(li);

// Replace elements

const newHeading = document.createElement('h2');

newHeading.id = 'task-title';

newHeading.appendChild(document.createTextNode('Task List'));

const oldHeading = document.getElementById('task-title');

const cardAction = document.querySelector('.card-action');

cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading);

// Remove elements

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

lis[1].remove();

list.removeChild(lis[2]);

const firstli = document.querySelector('li:first-child');
const link = firstli.children[0];

let val;

val = link.className;
val = link.classList;
val = link.classList[1];
link.classList.add('test');
val = link;
link.classList.remove('test');
val = link;
console.log(val);

val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val  = link.hasAttribute('href');
link.setAttribute('title','Google');
link.removeAttribute('title');
val=link;
console.log(val);

// Events

document.querySelector('.clear-tasks').addEventListener('click', function(e){
  console.log('HEllo');
  // e.preventDefault();
});

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  // console.log("hello from outside");
  let val;
  val = e;
  val = e.target;
  val = e.target.id;
  val = e.target.classList;
  val = e.target.innerText = 'Cleared';

  val = e.timeStamp;

  // val = e.type;
  console.log(val);
}

// Mouse Events

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// clearBtn.addEventListener('click',runEvent);
// clearBtn.addEventListener('dblclick',runEvent);
// clearBtn.addEventListener('mousedown',runEvent);
// clearBtn.addEventListener('mouseup',runEvent);
// card.addEventListener('mouseenter',runEvent);
// card.addEventListener('mouseleave',runEvent);
// card.addEventListener('mouseover',runEvent);
// card.addEventListener('mouseout',runEvent);
card.addEventListener('mousemove',runEvent);

function runEvent(e){
  console.log(`Event Type: ${e.type}`);
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},33)` 
}

// Keyboard and input events

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');
taskInput.value = '';
// form.addEventListener('submit',runEvent);
// form.addEventListener('keydown',runEvent);
// form.addEventListener('keyup',runEvent);
// form.addEventListener('keypress',runEvent);

// taskInput.addEventListener('focus',runEvent);
// taskInput.addEventListener('blur',runEvent);
// taskInput.addEventListener('cut',runEvent);
// taskInput.addEventListener('paste',runEvent);
// taskInput.addEventListener('input',runEvent);

select.addEventListener('change',runEvent);
function runEvent(e){

  console.log(`Event Type: ${e.type}`);
  console.log(e.target.value);

  // heading.textContent = e.target.value;
  // console.log(taskInput.value);
  // taskInput.value = '';
  // e.preventDefault();
}

// Event Bubbling

document.querySelector('.card-title').addEventListener('click',function(){
  console.log('card title');
});

document.querySelector('.card-content').addEventListener('click',function(){
  console.log('card content');
});

document.querySelector('.card').addEventListener('click',function(){
  console.log('card');
});
document.querySelector('.col').addEventListener('click',function(){
  console.log('col');
});


// Event Delegation

//without
// const del = document.querySelector('.delete-item');

// del.addEventListener('click',deleteItem);
document.body.addEventListener('click',deleteItem);

function deleteItem(e){

  // console.log(e.target);
  // if(e.target.parentElement.className  === 'delete-item secondary-content'){
  //   console.log('delete item');
  // }
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}
//---------------------------------------------------------------
*/






