// function Person(name,dob){
//     this.name = name;
//     // this.age = age;
//     this.birthday = new Date(dob);
//     this.getAge = function(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() -1970);
//     }
// }

// const p = new Person('Pearson','September 12 2000');
// const d = new Person('Dennis', 'February 22 1999');


// console.log(p.getAge());
// console.log(d);

// // console.log(this);
// // this.alert(11);

// Built in constructors

// const name = 'Shakthi';
// const name1 = new String('Shakthi');

// name1.lname = 'S';
// console.log(typeof name);
// console.log(typeof name1);

// const num = 5;
// const num1 = new Number(5);

// console.log(num);
// console.log(num1);

// const getsum1 = function(x,y){
//     return x+y;
// }

// const getsum2 = new Function('x','y','return x+y');

// console.log(getsum1(1,2));
// console.log(getsum2(1,2));

// const person = {name: ' Shakthi'};

// const person1 = new Object({name:'Shakthi'});

// // Regex

// const regex = /\w+/;
// const regex2 = new RegExp('\\w+');


// Prototypes


// function Person(firstName,lastName,dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//     // this.getAge = function(){
//     //     const diff = Date.now() - this.birthday.getTime();
//     //     const ageDate = new Date(diff);
//     //     return Math.abs(ageDate.getUTCFullYear() -1970);
//     // }
// }


// const m = new Person('Matt', 'Petersonn', '03-19-1999');

// Person.prototype.getAge = function(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() -1970);
// }

// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`
// }
// Person.prototype.getsMarried = function(newLName){
//     this.lastName = newLName;
//     // return `${this.firstname} ${this.lastName}`
// }

// const p = new Person('Pearson', 'Waltz', '12-19-2000');
// console.log(p);
// // console.log(m.getAge());
// // console.log(m.getFullName());
// // console.log(p.getsMarried('Petersonn'));
// // console.log(p.getFullName());

// // console.log(m.hasOwnProperty('firstname'));

// function Customer(firstName,lastName,phone,membership){
//     Person.call(this,firstName,lastName);
    
//     this.phone = phone;
//     this.membership = membership;

// }

// Customer.prototype = Object.create(Person.prototype);

// Customer.prototype.constructor = Customer;

// const customer1 = new Customer('Timothee','Flanagen', '8898988899','Premiuim');

// Customer.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName} welcome to our company`; 
// }
// console.log(customer1.getFullName());


// const personPrototypes = {
//     greeting: function(){
//         return `Hello ${this.firstName} ${this.lastName}`;
//     }
// }
// const m = Object.create(personPrototypes);
// m.firstName = 'Mark';
// m.lastName = 'Hakkins';
// m.age = 22;

// console.log(m);

// const b = Object.create(personPrototypes,{
//     firstName : {value: 'Bart'},
//     lastName:{value:'Simpson'},
//     age:{value:55}
// });

// console.log(b.greeting());

class Person{
    constructor(firstName,lastName,dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }
    greeting(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }
    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() -1970);
    }
    getsMarried (newLName){
        this.lastName = newLName;
        // return `${this.firstname} ${this.lastName}`
    }

    static addNumbers(x,y){
        return x+y;
    }
}

class Customer extends Person{
    constructor(firstName,lastName,phone,membership){
        super(firstName,lastName);
        this.phone = phone;
        this.membership = membership;
    }    
}

const g = new Person('Garry','Phillips','11-22-2019');
const cust1 = new Customer('Fin','Hudson','7888787800','Business');


// console.log(g.getsMarried('Gabson'));
// console.log(g);
console.log(cust1.greeting());
// console.log(Person.addNumbers(12,3));

