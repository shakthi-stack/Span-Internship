// // set local storage item
// localStorage.setItem('name','Shakthi');
// localStorage.setItem('age','22');
// // set session storage item
// sessionStorage.setItem('name','Saravanan');

// remove from store
// localStorage.removeItem('name');

//get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// localStorage.clear();
// console.log(name,age);

document.querySelector('form').addEventListener('submit',function(e){
    const task = document.getElementById('task').value;
    
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    // console.log(task);
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
    alert('task saved');
    e.preventDefault();

});

const taskss = JSON.parse(localStorage.getItem('tasks'));

taskss.forEach(function(task){
    console.log(task);
})