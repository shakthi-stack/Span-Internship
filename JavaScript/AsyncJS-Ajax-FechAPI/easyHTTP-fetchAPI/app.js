const http = new EasyHTTP;


const userGet = http.get('https://jsonplaceholder.typicode.com/users');
userGet.then(data => console.log(data)).catch(err => console.log(err));

const data = {
    name : 'Shakthi',
    username:'sss',
    email:'shakthiboy@gmail.com'
}

const userPost = http.post(data,'https://jsonplaceholder.typicode.com/users');
userPost.then(data => console.log(data)).catch(err => console.log(err));

const userPut = http.put(data,'https://jsonplaceholder.typicode.com/users/3');
userPut.then(data => console.log(data)).catch(err => console.log(err));

const userDel = http.delete('https://jsonplaceholder.typicode.com/users/3');
userDel.then(data => console.log(data)).catch(err => console.log(err));