import React from 'react'
import Moment from 'react-moment';
import { deleteNotes, doneNote } from '../controllers/NotesController'

function Task({refreshNotes, tasks}) {

    function deleteN(id) {
        deleteNotes(id)
        refreshNotes()
    }

    function setDone(id, status) {
        doneNote(id, status)
        refreshNotes()
    }


    return tasks.map((task) => {
        const { id, nameNote, createdAt, ready } = task;
        return (
            <div className={"card m-2" + (ready ? ' border-success' : '')} key={id} >
                <div class="card-body">
                    <h5>{nameNote}</h5>
                    <p class="card-title" style={{ "fontSize": "13px", "color": "gray" }}>
                        <Moment format='MMMM Do YYYY, h:mm:ss a' date={createdAt}></Moment></p>
                    <div align="right">
                        {ready !== true ?
                            <button class="btn btn-success" onClick={() => { setDone(id, true) }}>
                                <i class="bi bi-check-lg"></i>
                            </button>
                            : <button class="btn btn-warning" onClick={() => { setDone(id, false) }}>
                                <i class="bi bi-x-lg"></i>
                            </button>
                        }
                        <button class="btn btn-danger" onClick={() => { deleteN(id) }}>
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    })
}

export default Task