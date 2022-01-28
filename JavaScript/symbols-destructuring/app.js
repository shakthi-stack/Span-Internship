
// const sym = Symbol();



const key = Symbol('sym1');
const key2 = Symbol('sym2');

const myObj = {};

myObj[key] = 'property1';
myObj[key2] = 'property2';
myObj.key3 = 'prop3';
myObj.key4 = 'prop4';
console.log(myObj);
// console.log(sym);

for(let i in myObj){
    console.log(i,myObj[i]);
}

// destructuring

// let a,b;
// [a,b] = [100,200];
// // rest 
// [a,b,c, ...rest] = [100,200,300,400,500];
// console.log(rest);
// ({a,b} = {a:100,b:200,c:300,d:400});
// console.log(a,b);
// ({a,b, ...rest} = {a:100,b:200,c:300,d:400});
// console.log(rest);

// const people = ['d','f','g'];
// const [p1,p2,p3]=people;
// console.log(p1,p2,p3);


// const map1 = new Map();

// const key1 = 'String';
// const key2 = {};
// const key3 = ()=>{};

// map1.set(key1, 'Value of Key1');
// map1.set(key2, 'Value of Key2');
// map1.set(key3, 'Value of Key3');

// console.log(map1.get(key1),map1.get(key2),map1.get(key3));

// console.log(map1.size);

// //looping maps

// // for(let [key,value] of map1){
// //     console.log(key,value);
// // }

// const keyValArr = Array.from(map1);

// console.log(keyValArr);

// sets - uniques values of any type

const set1 = new Set();

set1.add(100);
set1.add('Shakthi');
set1.add({a:1,f:'Sha'});
set1.add(true);

const set2 = new Set([1,2,'str',true]);

// console.log(set1);
// // console.log(set2);
// console.log(set1.size);
// console.log(set1.has(100));
// console.log(set1.has(50+50));
// console.log(set1.has({a:1}));

// set1.delete(100);
// console.log(set1);

for(let i of set1){
    console.log(i);

}