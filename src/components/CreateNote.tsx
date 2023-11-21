import React, { useRef, useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { Note } from './models/note.model';

interface INoteCreateProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

export default function CreateNote({notes,setNotes}: INoteCreateProps) {
    //for validation
    const [error,setError] = useState<string>("");
    const titleRef = useRef<HTMLInputElement | null>(null);
    const textRef = useRef<HTMLTextAreaElement  | null>(null);
    const colorRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if(titleRef.current?.value === "" || textRef.current?.value == ""){
            return setError("All fields required");
        }

        setError("");
        setNotes([...notes,{
            id: (new Date).toString(),
            title: (titleRef.current as HTMLInputElement)?.value,
            text: (textRef.current as HTMLTextAreaElement)?.value,
            color: (colorRef.current as HTMLInputElement)?.value,
            date: (new Date).toString()
        }]);

        (titleRef.current as HTMLInputElement).value ="";
        (textRef.current as HTMLTextAreaElement).value ="";
        (colorRef.current as HTMLInputElement).value ="";
    }

  return (
    <>
        <h2>CreateNote</h2>
        { error && <Alert variant='danger'> { error}</Alert>}
        <Form className='mt-3 mb-3' onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className='mb-3' controlId='formBasicTitle'>
                <Form.Label>Title</Form.Label>
                <Form.Control type='text' placeholder='Enter Title' ref={titleRef} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicText'>
                <Form.Label>Note Text</Form.Label>
                <Form.Control as="textarea" placeholder='Enter Text' ref={textRef} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicColor'>
                <Form.Label>Note Color</Form.Label>
                <Form.Control type='color' id='colorInput' defaultValue={"#fff"} ref={colorRef} />
            </Form.Group>
            <Button type='submit' variant='success'>Submit</Button>
        </Form>
    </>
    
  )
}