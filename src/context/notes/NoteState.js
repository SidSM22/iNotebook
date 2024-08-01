
import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) =>{
    const host = "http://localhost:5000";
    const notesInitial = []   

    const [notes, setNotes] = useState(notesInitial);

    //Get all notes
    const getNotes =async ()=>{
      //API Calls
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type':'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3MDBhMTZmYmFkZGJjNzgyMWM0ZmExIn0sImlhdCI6MTcxOTY0Mzc0OH0.02jx80A37DUK2OLyFr2nxzuVMGDxK42owFS_Fu422Zg"
        },
      });
      const json = await response.json();
      console.log(json);
      setNotes(json)
    }


    //Add a note
    const addNote =async (title, description, tag)=>{
      //API Calls
      const response = await fetch(`${host}/api/notes/addenote`, {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3MDBhMTZmYmFkZGJjNzgyMWM0ZmExIn0sImlhdCI6MTcxOTY0Mzc0OH0.02jx80A37DUK2OLyFr2nxzuVMGDxK42owFS_Fu422Zg"
        },
        body: JSON.stringify({title, description, tag})
      });

      console.log("Adding a new note")
      const note = {
        "_id": "66a4e29485cbaea496511ae7",
        "user": "66700a16fbaddbc7821c4fa12",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2024-07-27T12:05:40.198Z",
        "__v": 0
        }
      setNotes(notes.concat(note))
    }

    //Delete a note
    const deleteNote = (id)=>{
      //API Call
      console.log("Deleting with id " + id)
      const newNotes = notes.filter((note)=>{return note._id!==id})
      setNotes(newNotes);
    }
    
    //Edit a note//
    const editNote =async (id, title, description, tag)=>{
      //API CALLS
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3MDBhMTZmYmFkZGJjNzgyMWM0ZmExIn0sImlhdCI6MTcxOTY0Mzc0OH0.02jx80A37DUK2OLyFr2nxzuVMGDxK42owFS_Fu422Zg"
        },
        body: JSON.stringify({title, description, tag})
      });
      const json =  response.json();
      //Logic to edit in Client
      for(let index = 0 ; index < notes.length ; index++){
        const element = notes[index];
        if(element._id === id){
          element.title = title;
          element.description = description;
          element.tag = tag;
        }
      }
    }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;