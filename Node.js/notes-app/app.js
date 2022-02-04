// const validator = require('validator');
const chalk = require('chalk');
const { command, describe, argv } = require('yargs');
const yargs = require('yargs');
const notes = require('./note');

// console.log(getNotes());
// console.log(chalk.green('Success!!'));
// console.log(chalk.green.bold('Success!!'));
// console.log(chalk.blue.bold.inverse('Success!!'));
// // console.log(validator.isURL('https:/www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728848#notes'));
// console.log(process.argv[2],process.argv[3]);
// const cmd = process.argv[2];
// console.log(process.agrv);
// if(cmd === 'add'){
//     console.log('adding..');
// }else if(cmd === 'remove'){
//     console.log('removing..');
// }
// console.log(process.agrv);

yargs.version('1.1.0');

yargs.command({
    command: "add",
    describe: "Add new note",
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption:true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        notes.addNote(argv.title,argv.body);
    }
});

yargs.command({
    command: "remove",
    describe: "Remove note",
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        notes.removeNote(argv.title);
    }
});
yargs.command({
    command: "list",
    describe: "List notes",
    handler: ()=>{
        notes.listNotes();
    }
});
yargs.command({
    command: "read",
    describe: "Read note",
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        notes.readNote(argv.title);
    }
});


yargs.parse();
// console.log(yargs.argv);