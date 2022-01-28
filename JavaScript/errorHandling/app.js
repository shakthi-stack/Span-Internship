try{
    // myFunction();

    // null.myFunction();
    eval('Hello dd');

    decodeURIComponent('%');
}catch(e){
    console.log(e);
    
    // console.log(e.message);
    // console.log(e.name);
    // console.log(e instanceof TypeError);
}finally{
    console.log('Finally...')
}
// myFunction();
// console.log('after try-catch');