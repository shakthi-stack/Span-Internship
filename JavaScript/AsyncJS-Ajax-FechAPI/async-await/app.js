// async function myFunc(){
//     // return 'hello';

//     const promise = new Promise((resolve,reject)=>{

//         setTimeout(()=>resolve('Hello'),2000);

//     });

//     const res = await promise;
//     return res;
// }

// // console.log(myFunc());

// myFunc().then(res => console.log(res));


async function getUsers(){
    const response = await fetch('https://api.github.com/users');

    const data = await response.json();

    return data;
}

getUsers().then(users=>console.log(users));