const chalk=require('chalk')
const { string, argv } = require('yargs')
const yargs=require('yargs')
const notes=require('./notes.js')

yargs.version('1.1.0')

//Create Add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type:'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//Create Remove command
yargs.command({
    command: 'del',
    describe: 'Remove an existing note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//Create Read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

//Create List command
yargs.command({
    command: 'list',
    describe: 'List all available notes',
    handler(argv){
        notes.listNotes(argv)
    }
})
//Add, Remove, Read, List
yargs.parse()