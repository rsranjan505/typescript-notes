import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Note } from './components/models/note.model';
import NoteList from './components/NoteList';
import { Col, Container, Row } from 'react-bootstrap';
import CreateNote from './components/CreateNote';

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: "Meetings",
    text: "Schedule meeting",
    color: "#fff",
    date: (new Date).toString()
  }]);
  return (
    <>
      <Header/>
      <Container className='mt-5'>
          <Row>
              <Col>
                <NoteList notes={notes} setNotes={ setNotes } />
              </Col>
          </Row>
          <Row>
              <Col>
                <CreateNote notes={notes} setNotes={ setNotes } />
              </Col>
          </Row>
      </Container>
     
    </>
  );
}

export default App;
