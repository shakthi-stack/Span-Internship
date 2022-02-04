const fs = require('fs');
const chalk = require('chalk');

const getNotes = ()=>{
    return 'new note';
}

const addNote = (title,body)=>{
    const notes = loadNotes();
    // const dupNotes = notes.filter( note => note.title === title);
    const dupNotes_ = notes.find( note => note.title === title);;
    if(!dupNotes_){
        notes.push({
            title: title,
            body:body
        });
        saveNotes(notes);
        console.log(chalk.green("New note created!"));
    }else{
        console.log(chalk.red('Note exists'));
    }
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        return JSON.parse(dataBuffer.toString());
    }catch(e){
        return [];
    }
}

const saveNotes = (notes)=>{
    try{
        fs.writeFileSync("notes.json",JSON.stringify(notes));
    }catch(e){
        console.log(e);
    }
}

const removeNote = (title)=>{
    const notes = loadNotes();
    const existNotes = notes.filter( note => note.title !== title);
    if (notes.length > existNotes.length){
        console.log(chalk.green("Note Deleted!"));
        saveNotes(existNotes);
    }else{
        console.log(chalk.red("Note does not exist!"));
    }
    
}
const listNotes = ()=>{
    const dataBuffer = fs.readFileSync('notes.json');
    const data = JSON.parse(dataBuffer.toString());
    console.log("Your Notes:");
    data.forEach((note,index)=>{
        console.log(chalk.green.inverse(`Title ${index+1} : ${note.title}`));
    })
}

const readNote = (title)=>{
    const notes = loadNotes();
    // const dupNotes = notes.filter( note => note.title === title);
    const dupNotes_ = notes.find( note => note.title === title);;
    if(dupNotes_){
        // console.log(dupNotes_);
        // debugger
        console.log(`${chalk.bold.green(dupNotes_.title)} -> ${chalk.blue(dupNotes_.body)}`)
    }else{
        console.log(chalk.red('Note does not exist'));
    }
}
    

module.exports = {getNotes,addNote,removeNote,listNotes,readNote};