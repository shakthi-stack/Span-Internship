const posts = [
    {title:'Post one', body:'Hello',
    title:'Post two', body:'Hello'
}
];

function createPost(post){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            posts.push(post);
            const err = false;

            if(!err){
                resolve();
            }else{
                reject('something went wrong');
            }

            resolve();
        },3000);
    })
}

function getPos(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },3000);
}
createPost({title:'Post three', body:'Hello'}).then(getPos).catch(function(err){
    console.log(err);
});
// getPos();