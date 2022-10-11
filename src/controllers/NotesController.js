var nameStorage = "notes"
let notesFilter = []
let resNotes = {
    countReady: 0,
    total: 0,
    notes: []
}

const saveNotes = (note) => {
    const JSONote = {
        id: Math.random().toString(16).slice(2),
        nameNote: note,
        ready: false,
        createdAt: new Date()
    }

    if (existStorage(nameStorage)) {
        resNotes = JSON.parse(localStorage.getItem(nameStorage))
        resNotes.notes.push(JSONote)
        localStorage.setItem('notes', JSON.stringify(resNotes))
    }else{
        resNotes.notes.push(JSONote);
        localStorage.setItem('notes', JSON.stringify(resNotes))
    }
}

const listNotes = (search) => {
    resNotes = JSON.parse(localStorage.getItem(nameStorage)) || {}
    resNotes.total = resNotes.notes.length
    resNotes.notes.forEach(note => {
        if(note.ready == true){
            resNotes.countReady = resNotes.countReady + 1
        }
    });
    if(search != null && search != ""){
        notesFilter = []
        for (const note of resNotes.notes) {
            if(note.nameNote === search){
                notesFilter.push(note)
            }
        }
        resNotes.notes = notesFilter
        return resNotes
    }
    return resNotes
}

const deleteNotes = (id) =>{
    resNotes = JSON.parse(localStorage.getItem(nameStorage))
    
    resNotes.notes.splice(getObjWithIdIndex(id), 1);
    localStorage.setItem('notes', JSON.stringify(resNotes))
}

const doneNote = (id, status) =>{
    resNotes = JSON.parse(localStorage.getItem(nameStorage))
    resNotes.notes[getObjWithIdIndex(id)].ready = status
    localStorage.setItem('notes', JSON.stringify(resNotes))
}



//HELPERS

function existStorage(name) {
    if (localStorage.getItem(name) != null) {
        return true
    }
    return false
}

function getObjWithIdIndex(id){
    return resNotes.notes.findIndex((obj) => obj.id === id);
}

export {
    saveNotes,
    listNotes,
    deleteNotes,
    doneNote
}