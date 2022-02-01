// Module pattern 
//basic structure
// (function(){
//     //declare private variables and functions

//     return{
//         //declare public variables and functions
//     }
// })();

// const UICtrl = (function(){
//     let text = 'HEllo';
//     const changeText = function(){
//         const element = document.querySelector('body');
//         element.innerHTML = `<h1>${text}</h1>`;
//     }
//     return{
//         callChangeText: function(){
//             changeText();
//             console.log(text);
//         }
//     }
// })();

// UICtrl.callChangeText();
//---------------------------------------------------------------------------
// Revealing Module pattern 

// const ItemCtrl = (function (){
//     let data = [];

//     function add(item){
//         data.push(item);
//         console.log('Item Added');
//     }

//     function get(id){
//         return data.find(item =>{
//             return item.id === id;
//         })
//     }

//     return{
//         add: add,
//         get: get
//     }
    
// })();

// ItemCtrl.add({id: 1,name: 'Shakthi'});
// ItemCtrl.add({id: 2,name: 'Mark'});
// console.log(ItemCtrl.get(id));
//----------------------------------------------------------------------
//Singleton pattern
//can't have more than one instance in this pattern
// const Singleton = (function(){
//     let instance;

//     function createInstance(){
//         const obj = new Object({id:21,name:'SS'});
//         return obj;
//     }

//     return{
//         getInstance: function(){
//             if(!instance){
//                 instance = createInstance();
//             }
//             return instance;
//         }
//     }
// })();

// const instanceA = Singleton.getInstance()
// console.log(instanceA);

//--------------------------------------------------------------
//Factory pattern

// function MemberFactory(){
//     this.createMember = function(name,type){
//         let member;

//         if(type === 'basic'){

//             member = new BasicMembership(name);
//         }else if (type === 'business'){
//             member = new BusinessMembership(name);
//         }else if (type === 'premium'){
//             member = new PremiumMembership(name);
//         }
//         member.type = type;

//         member.define = function(){
//             console.log(`${this.name} (${this.type}): ${this.cost}`);
//         }
//         return member;
//     }
// }

// const BasicMembership = function(name){
//     this.name = name;
//     this.cost = '$6';
// }
// const BusinessMembership = function(name){
//     this.name = name;
//     this.cost = '$14';
// }
// const PremiumMembership = function(name){
//     this.name = name;
//     this.cost = '$27';
// }

// const members = [];
// const factory = new MemberFactory();

// members.push(factory.createMember('Jack Martin', 'premium'));

// console.log(members);

// members.forEach(function(member){
//     member.define();
// });

//-----------------------------------------------------------------------------------

//Observer pattern

// function EventObserver(){
//     this.observers = [];

// }

// EventObserver.prototype={
//     subscribe: function(fn){
//         this.observers.push(fn);
//         console.log(`subscribed to ${fn.name}`);
//         console.log(this.observers);
//     },
//     unsubscribe: function(fn){
//         this.observers = this.observers.filter(function(item){
//             if(item !== fn){
//                 return item;
//             }
//         });
//         console.log(`unsubscribed from ${fn.name}`);

//     },
//     fire : function(){
//         this.observers.forEach(function(item){
//             item.call();
//         });
//     }
// }

// const click = new EventObserver();

// document.querySelector('.sub-ms').addEventListener('click',()=>{
//     click.subscribe(getCurMS);
// });
// document.querySelector('.unsub-ms').addEventListener('click',()=>{
//     click.unsubscribe(getCurMS);
// });
// document.querySelector('.fire').addEventListener('click',()=>{
//     click.fire();
// });

// const getCurMS = ()=>{
//     console.log(`current milli secs: ${new Date().getMilliseconds()}`);
// }
// --------------------------------------------------------------------------------------------

// Mediator Pattern 
// const User = function(name){
//     this.name = name;
//     this.chatroom = null;
// }

// User.prototype = {
//     send : function(msg,to){
//         this.chatroom.send(msg,this,to);
//     },
//     recieve: function(msg,from){
//         console.log(`${from.name} to ${this.name} : ${msg}`);
//     }
// }

// const Chatroom = function(){
//     let users = {};

//     return {
//         register: (user)=>{
//             users[user.name] = user;
//             user.chatroom = this;
//         },
//         send: (msg,from,to)=>{
//             if(to){
//                 to.recieve(msg,from);
//             }else{
//                 for(key in users){
//                     if(users[key] !== from){
//                         users[key].recieve(msg,from);
//                     }
//                 }
//             }
//         }
//     }
// }

// const jim = new User('Jim');
// const dwight = new User('Dwight');
// const andy = new User('Andy');
// const pam = new User('Pam');

// const chatroom = new Chatroom();

// chatroom.register(jim);
// chatroom.register(dwight);
// chatroom.register(andy);
// chatroom.register(pam);

// jim.send('Hello pam', pam);
// pam.send('Hey you..', jim);

//-------------------------------------------------------------------------------

// State Pattern

// const PageState = function(){
//     let currentState = new homeState(this);

//     this.init = function(){
//         this.change(new homeState);
//     }
//     this.change = function(state){
//         currentState = state;
//     }
// };

// const homeState = function(page){
//     document.querySelector('#heading').textContent = null;
//     document.querySelector('#heading').innerHTML = `
//         <div class="jumbotron">
//             <h1 class="display-4">Hello, world!</h1>
//             <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
//             <hr class="my-4">
//             <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
//             <p class="lead">
//                 <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
//             </p>
//         </div>
//     `;
// }

// const aboutState = function(page){
//     document.querySelector('#heading').textContent = 'About Us';
//     document.querySelector('#heading').innerHTML = `
//         <p>This is the About us page</p>
//     `;
// }

// const contactState = function(page){
//     document.querySelector('#heading').textContent = 'Contact Us';
//     document.querySelector('#heading').innerHTML = `
//     <form>
//     <div class="form-group">
//       <label for="exampleFormControlInput1">Email address</label>
//       <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
//     </div>

//     <div class="form-group">
//       <label for="exampleFormControlTextarea1">Example textarea</label>
//       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//     </div>
//   </form>
//     `;
// }

// const page = new PageState();

// page.init();

// const home = document.getElementById('home'),
// about = document.getElementById('about'),
// contact = document.getElementById('contact');

// home.addEventListener('click', (e)=>{
//     page.change(new homeState);
//     e.preventDefault();
// })
// about.addEventListener('click', (e)=>{
//     page.change(new aboutState);
//     e.preventDefault();
// })
// contact.addEventListener('click', (e)=>{
//     page.change(new contactState);
//     e.preventDefault();
// })