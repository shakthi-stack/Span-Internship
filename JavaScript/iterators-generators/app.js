// Iterator

// function nameIterator(names){
//     let nextIndex = 0;

//     return{
//         next: function(){
//             return nextIndex < names.length ? 
//             { value: names[nextIndex++], done:false}:
//             {done: true}
//         }
//     }
// }

// const namesArr = ['Harry','Ron','Hermoine'];

// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

//generators 
// function* sayNames(){
//     yield 'HArry';
//     yield 'ROn';
//     yield 'Hermoine';

// }
// const name = sayNames();
// console.log(name.next());
// console.log(name.next());
// console.log(name.next());
// console.log(name.next());

function* createIds(){
    let index = 0;

    while(true){
        yield index++;
    }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);