import React, { ReactNode } from 'react'
import { Note } from './models/note.model'
import Notes from './Notes'

interface INoteListProps  {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

export default function NoteList({notes,setNotes}: INoteListProps) {
    const handleDelete = (id: string) => {
        setNotes(notes.filter(note => note.id !== id));
    }
    const rendernotes = () => {
      return notes.map(note => {
            return <Notes key={note.id} note={note} handleDelete={ handleDelete} />
        })
    }
  return (
    <>
        <h3 className='mt-5'>NoteList</h3>
        <div>{ rendernotes() }</div>
    </>
  )
}