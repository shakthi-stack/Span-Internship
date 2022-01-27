// const greeting = function(){
//     console.log('Hello');
// }


// const greeting = () => {
//     console.log('Hello');
// }

// const greeting = () => console.log('Hello');

// const greeting = () => ({msg:'Hello'});

// const greeting = (fname,lname) => ({msg:`Hello ${fname} ${lname}`});



// console.log(greeting('Shakthi','Saravanan'));

const users = [1,2,3,4,5];

// const ids = users.map(function(idss){
//     return idss+=1;
// })

const ids = users.map(idss => idss+=1);

console.log(ids);