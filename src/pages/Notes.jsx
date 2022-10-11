import React, { useEffect, useState } from 'react'
import AddNotes from '../components/AddNotes';
import Introduction from '../components/Introduction';
import ListNotes from '../components/ListNotes';
import SearchNotes from '../components/SearchNotes';
import { listNotes } from '../controllers/NotesController';

function Notes() {

    const [list, setList] = useState([]);

    useEffect(() => {
        setList(listNotes())
    },[])

    function refreshNotes() {
        setList(listNotes())
    }

    function searching(word) {
        setList(listNotes(word))
    }

    return (
        <>
            <Introduction></Introduction>
            <div class="col-12">
                <SearchNotes searching={searching}></SearchNotes>
                <AddNotes refreshNotes={refreshNotes}></AddNotes>
                <ListNotes resNotes={list} refreshNotes={refreshNotes}></ListNotes>
            </div>
        </>

    )
}

export default Notes
