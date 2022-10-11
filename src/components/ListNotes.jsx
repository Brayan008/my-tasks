import React from 'react'
import Task from './Task'


function ListNotes(props) {
    
    return (
        <div class="col-12">
            <h3 align="center">
                {props.resNotes.countReady} out of {props.resNotes.total} tasks completed
            </h3>
            {props.resNotes.notes != null ?
                <Task 
                tasks={props.resNotes.notes}
                refreshNotes={props.refreshNotes}></Task>
                : "Not notes"}
        </div>
    )
}

export default ListNotes