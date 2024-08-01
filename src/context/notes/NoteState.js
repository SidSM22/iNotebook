
import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) =>{
    const notesInitial = [
        {
          "_id": "668175f8231316fa3be1b65b",
          "user": "66700a16fbaddbc7821c4fa1",
          "title": "Updated banda hu",
          "description": "Ghar ka na ghat ka",
          "tag": "public",
          "date": "2024-06-30T15:12:56.206Z",
          "__v": 0
        },
        {
          "_id": "66a4e29495cbaea496511ae7",
          "user": "66700a16fbaddbc7821c4fa1",
          "title": "My Title",
          "description": "This is the Description of Note",
          "tag": "personal",
          "date": "2024-07-27T12:05:40.198Z",
          "__v": 0
        },
        {
            "_id": "66a4e29490cbaea496511ae7",
            "user": "66700a16fbaddbc7821c4fa1",
            "title": "My Title",
            "description": "This is the Description of Note",
            "tag": "personal",
            "date": "2024-07-27T12:05:40.198Z",
            "__v": 0
        },
        {
            "_id": "668175f8232316fa3be1b65b",
            "user": "66700a16fbaddbc7821c4fa1",
            "title": "Updated banda hu",
            "description": "Ghar ka na ghat ka",
            "tag": "public",
            "date": "2024-06-30T15:12:56.206Z",
            "__v": 0
          },
          {
            "_id": "66a4e29494cbaea496511ae7",
            "user": "66700a16fbaddbc7821c4fa1",
            "title": "My Title",
            "description": "This is the Description of Note",
            "tag": "personal",
            "date": "2024-07-27T12:05:40.198Z",
            "__v": 0
          },
          {
              "_id": "66a4e29295cbaea496511ae7",
              "user": "66700a16fbaddbc7821c4fa1",
              "title": "My Title",
              "description": "This is the Description of Note",
              "tag": "personal",
              "date": "2024-07-27T12:05:40.198Z",
              "__v": 0
            },
        {
            "_id": "66a4e29485cbaea496511ae7",
            "user": "66700a16fbaddbc7821c4fa1",
            "title": "My Title",
            "description": "This is the Description of Note",
            "tag": "personal",
            "date": "2024-07-27T12:05:40.198Z",
            "__v": 0
            }
      ]   

    const [notes, setNotes] = useState(notesInitial);

    //Add a note
    const addNote = (title, description, tag)=>{
      //to do api calls
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
      console.log("Deleting with id " + id)
      const newNotes = notes.filter((note)=>{return note._id!==id})
      setNotes(newNotes);
    }
    
    //Edit a note
    const editNote = (id)=>{
      
    }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;