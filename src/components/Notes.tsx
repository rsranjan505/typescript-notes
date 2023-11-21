import React from 'react'
import { Note } from './models/note.model'
import { Button, Card } from 'react-bootstrap'

type Props = {
  note: Note
  handleDelete: (id: string) => void
}

export default function Notes({note, handleDelete}: Props) {
  return (
    <div className='mt-3'>
      <Card style={{backgroundColor: note.color}}>
        <Card.Body >
          <Card.Title>
              {note.title}
          </Card.Title>
          <Card.Text>
              {note.text}
          </Card.Text>
          <Card.Subtitle>
              {note.date}
          </Card.Subtitle>
          <Button className='mt-3' variant='danger' onClick={()=> handleDelete(note.id) }>Delete</Button>
        </Card.Body>
      </Card>
    </div>
  )
}