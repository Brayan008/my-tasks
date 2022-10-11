import React, { useState } from 'react'

function SearchNotes(props) {
    const [word, setWord] = useState("");

    function sendSearch() {
        props.searching(word)
    }

    function clearSearch(){
        setWord("")
        props.searching("")
    }

    return (
        <>
            <div class="input-group mb-3">
                <input type="text"
                    class="form-control"
                    value={word}
                    onChange={(e) => { setWord(e.target.value) }}
                    placeholder="Search..." />
                <button class="btn btn-primary"
                    type="button"
                    onClick={() => { sendSearch() }}><i class="bi bi-search"></i></button>
                {word !== "" ?
                    <button class="btn btn-secundary"
                        type="button"
                        onClick={() => { clearSearch() }}><i class="bi bi-x-octagon"></i></button>
                    : <></>
                }

            </div>
        </>
    )
}

export default SearchNotes