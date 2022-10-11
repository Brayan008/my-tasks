import React, { useState } from 'react'
import { saveNotes } from '../controllers/NotesController'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function AddNotes(props) {

  const [note, setNote] = useState("");
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  function save(note) {
    toggle()
    saveNotes(note)
    setNote("")
    props.refreshNotes()
  }

  return (
    <>
        <Button color="primary" className="m-4 fixed-bottom" onClick={toggle}>
          <i class="bi bi-plus"></i>
        </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Note</ModalHeader>
        <ModalBody>
          <input type="text"
            class="form-control"
            value={note}
            placeholder="Write your note"
            aria-label="Write your note"
            onChange={(e) => { setNote(e.target.value) }} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => { save(note) }}>
            Save
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default AddNotes