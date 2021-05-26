const chalk=require('chalk')
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

yargs.command({
    command: 'open',
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

yargs.command({
    command: 'logs',
    describe: 'List all available notes',
    handler(argv){
        notes.listNotes(argv)
    }
})

yargs.parse()