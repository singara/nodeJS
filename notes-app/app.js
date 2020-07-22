// const fs = require('fs');
// const add = require('./utils.js');
// const name = require('./utils.js');
const notes = require('./notes.js');
//const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

// fs.writeFileSync('imprimioManao.txt', 'This file was created to hide spoilers');
// fs.appendFileSync('imprimioManao.txt', "...  don't look!!");
// console.log(notes())

// console.log(validator.isEmail('tony.stark@muere.rip'))

// console.log(chalk.red.underline('RIP Stan Lee.'));

//const command = process.argv[2]

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Add,edit,remove,read

//Create remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//Create List Command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        notes.listNotes()
    }
})

yargs.parse()

// if (command === 'add') {
//     console.log('Adding note')
// } else if (command === 'remove') {
//     console.log('Removing note')
// }