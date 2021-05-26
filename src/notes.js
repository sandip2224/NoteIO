const chalk=require('chalk')
const fs=require('fs')

const addNote=(title, body) =>{
    const notes= loadNotes()
    const duplicateNote=notes.find((note) => note.title==title)

    debugger

    if(duplicateNote===undefined){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added successfully!!'))
    }
    else{
        console.log(chalk.red.inverse('Note title already taken!'))
    }
}

const removeNote=(title) => {
    const notes= loadNotes()
    const notesToKeep=notes.filter((note) =>{
        return note.title!==title
    })
    saveNotes(notesToKeep)
    if(notesToKeep.length==notes.length){
        console.log(chalk.red.inverse('No note found!!'))
    }
    else{
        console.log(chalk.green.inverse('Note deleted successfully'))
    }
}

const listNotes=() =>{
    var c=1
    console.log(chalk.inverse("Your Notes!!"));
    const notes=loadNotes()
    notes.forEach((note) => {
        console.log(chalk.blue.inverse(note.title));
        console.log(chalk.green.inverse(note.body));
        console.log("");
    });
}

const readNote=(title) => {
    const notes=loadNotes()
    const findNote=notes.find((note) => note.title==title)

    if(findNote == undefined){
        console.log(chalk.red.inverse("Note not found!!"))
    }
    else{
        console.log(chalk.blue.inverse(findNote.title));
        console.log(chalk.green.inverse(findNote.body));
    }
}

const loadNotes=() =>{
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        const data=JSON.parse(dataJSON)
        return data
    } catch(e){
        return []
    }
}

const saveNotes=function(notes){
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

module.exports={
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
