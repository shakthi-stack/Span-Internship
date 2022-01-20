/*
//------------------------------------------------------------
// Log to console
console.log('Hello World');
console.log(123);
console.log(true);
var greeting = 'Hello Shakthi';
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1,b:2});
console.table({a:1,b:2});

console.error('this is an error');

console.clear();

console.warn('this is a warning');

console.time('Hello');
console.log([1,2,3,4]);
console.log([1,2,3,4]);
console.log([1,2,3,4]);
console.timeEnd('Hello');
console.clear()

//Variables
//var, let, const -> var is not recommended
var names = 'Shakthi';
console.log(names);
names = 'Saravanan';
console.log(names);

var greetings;
console.log(greetings);
greetings= 'Hello';
console.log(greetings);

let secondName = 'Saravanan';
console.log(secondName);
//same as var

const lastName = 'Sampath';
console.log(lastName);
// lastName = 'S';
// console.log(lastName);
// can be assigned only once 
console.clear();
const person = {
    name: 'Shakthi',
    age: 21
}

console.log(person);
person.age = 22;
console.log(person);

const nums = [1,2,3,4];
console.log(nums);
nums[2]=7;
console.log(nums);

// Data types
//Primitive types: String, Number, Boolean, Null, Undefined, Symbols (ES6)
// Reference Types: Arrays, Object Literals, Functions, Dates ...
// Dynamically typed..
// Typescript -> JS which is static typed
let x= 'John';
console.log(typeof x);
let y= 33;
console.log(typeof y);
let z = true;
console.log(typeof z);
let a = null;
console.log(typeof a);
let b;
console.log(typeof b);
let sym = Symbol();
console.log(typeof sym);

const arr = ['ss','ff']
console.log(typeof arr);

const persons = {
    name: 'Shakthi',
    age: 21
}
console.log(typeof persons);

const today = new Date();
console.log(typeof today);
console.clear();
// Type Conversion
let val;

val = 22;

console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(22);

console.log(val);
console.log(typeof val);
console.log(val.length);



val = String(true);

console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(new Date());

console.log(val);
console.log(typeof val);
console.log(val.length);

val = String([1,2,3,4,5]);

console.log(val);
console.log(typeof val);
console.log(val.length);

val = (44).toString();

console.log(val);
console.log(typeof val);
console.log(val.length);

val = Number('4');

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = Number(true);

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = Number(null);

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = Number('hello');

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = Number([2,3,4]);

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = parseInt('100');

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = parseFloat('100.33');

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));
console.clear();

// Type Coersion
const val1 = 5;
const val2 = 33;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);

const val3 = 5;
const val4 = '33';
const sum1 = val3 + val4;

console.log(sum1);
console.log(typeof sum1);

// Math 

const num1 = 100;
const num2 = 33;
let value;

value = Math.PI;
console.log(value);
value = Math.E;
console.log(value);
value = Math.round(2.4);
console.log(value);
value = Math.ceil(34.5);
console.log(value);
value = Math.floor(34.5);
console.log(value);
value = Math.sqrt(4);
console.log(value);
value = Math.abs(-22);
console.log(value);
value = Math.pow(3,4);
console.log(value);
value = Math.min(3,4,3,22,3,4,-1);
console.log(value);
value = Math.max(3,4,3,22,3,4,-1);
console.log(value);
value = Math.floor(Math.random()*21);
console.log(value);
console.clear();

// Strings

const fName = 'Shakthi';
const lName = 'Saravanan';
const age = 21;
const str = 'Hello World I\'m Shakthi';

value = fName+lName;
console.log(value);
value = fName+' '+lName;
console.log(value);
value = 'SS';
value+='BB';
console.log(value);

value = 'That\'s awesome, I can win';
console.log(value);

value = fName.length;
console.log(value);

value = fName.concat(' ',lName);
console.log(value);

value = fName.toUpperCase();
console.log(value);

value = fName.toLowerCase();
console.log(value);

value = fName[3];
console.log(value);

value = fName.indexOf('k');
console.log(value);

value = lName.lastIndexOf('a');
console.log(value);

value = fName.charAt('2');
console.log(value);

value = fName.substring(0,3);
console.log(value);

value = fName.slice(0,4);
console.log(value);

value = fName.slice(-2);
console.log(value);

value = fName.slice(0,4);
console.log(value);

value = str.split(' ')
console.log(value);

value = str.replace('Shakthi', 'Saravanan');
console.log(value);

value = str.includes('World');
console.log(value);

// Template Literals

const city = 'Coimbatore';
const job = 'Intern';

let html;

function hello(){
    return 'hello';
}
// html = '<ul><li>'+fName+'</li><li>'+age+'</li><li>'+job+'</li><li>'+city+'</li></ul>';

// document.body.innerHTML = html;

html = `<ul>    <li>${fName}</li>
                <li>${age}</li>
                <li>${job}</li>
                <li>${city}</li>
                <li>${2+2}</li>
                <li>${hello()}</li>
                <li>${age < 30 ? 'under 30' : 'over 30'}</li>
        </ul>`;
document.body.innerHTML = html;
console.clear();

// Arrays

const ar = [1,2,3,4,5,66,67,77];
const ar2 = new Array(1,2,3,45,56,66);
const ar3  = ['a', 1, null, true, [1,2,3], new Date()];
console.log(ar3);

value = ar.length;
console.log(ar);
console.log(value);

value = Array.isArray(ar);
console.log(ar);
console.log(value);

value = ar[4];
console.log(ar);
console.log(value);

ar[2] = 100;
console.log(ar);
console.log(value);

value = ar.indexOf(100);
console.log(ar);
console.log(value);

ar.push(222);
// value = ar.length;
console.log(ar);
// console.log(value);

ar.unshift(111);
// value = ar.length;
console.log(ar);
// console.log(value);

ar.pop()
console.log(ar);
// console.log(value);

ar.shift();
console.log(ar);
// console.log(value);

ar.splice(1,3); // start to end
console.log(ar);

ar.reverse();
console.log(ar);

val = ar.concat(ar2);
// ar.shift();
console.log(val);

val = val.sort();//just first num is sorted
console.log(val);

val = val.sort(function(x,y){
    return x-y;
});
console.log(val);

val = val.sort(function(x,y){
    return y-x;
});
console.log(val);

function under30(num){
    return num<30;
}
val = ar.find(under30);
console.log(val);

// object literals
const person = {
    'fName': 'Shakthi Saravanan',
    'lName': 'Sampath',
    'age': 22,
    'email': 'shakthisaravanan1@outlook.com',
    'address': {
    'city': 'Coimbatore',
    'state': 'TN'},
    'getBirthYear': function(){
        return 2022 - this.age;
    }
}


let val;

val = person;
console.log(val);

val = person.fName;
console.log(val);

val = person.address;
console.log(val);

val = person.address.city;
console.log(val);

val = person.getBirthYear();
console.log(val);

const people = [
    {name: 'Shakthi', age : 20},
    {name: 'Saravanan', age : 22},
    {name: 'Sampath', age : 22}
];

for(let i=0; i<people.length;i++){
    console.log(people[i].name);
}

// Dates and Time
let val;
const today = new Date();
let bday = new Date('12-19-2000 11:25:00');
bday = new Date('December 19 2000 ');
bday = new Date('12/19/2000');
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();
console.log(val);

bday.setMonth(2);
console.log(bday);
// console.log(typeof val);

// function declarations

function greet(fName = 'John',lName = 'Doe'){
    //console.log('Hello');

    return 'hello'+' '+fName+' '+lName;
}

// console.log(greet('Shakthi'))

// Function Expressions

const square = function(x = 7){
    return x*x;
}

console.log(square());

// IIFEs

(function (){
    console.log('IIFE..')
})();

(function (name){
    console.log(name)
})('sss');
//-------------------------------------------------------------------
*/

// alert('error');
// const p = prompt();
// alert(p);

// if (confirm('Are you sure')){
//     console.log('yes');}

// val1 = window.outerHeight;
// val2 = window.innerHeight;
// console.log(val1);
// console.log(val2);

// val = window.scrollY;
// console.log(val);
// // console.log(val2);

// val = window.location;
// val = window.location.href;
// val = window.location.search;

// window.location.href='https://google.com';
// console.log(val);

// window.history.go();
// console.log(val);
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// console.log(val);

var a = 1;
let b = 2;
const c = 3;

function test(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('test:',a,b,c);
}
if (true){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('if:',a,b,c);
}
for(var a =0;a<10;a++){
    console.log('Loop',a);
}
console.log('Global:',a,b,c);
test();