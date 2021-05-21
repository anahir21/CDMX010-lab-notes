import React, { useState } from 'react';
import { db } from '../Config';
import './CreateNote.css'
import '../App.css'

export const CreateNote = (props) => {

    const [title, setTitle] = useState(props.note ? props.note.title : "");
    const [body, setBody] = useState(props.note ? props.note.body : "");
    

    const setNotes = async(e) => {
        if (props.note){
            const updates ={
        
            title: title, 
            body: body,
            }; 
            try {
            await db.doc(`mynotes/${props.note.id}`).update(updates);
            } catch(error) {
                console.log(error);
          }
          db.collection("mynotes");
        } else {
            const writeNote= {
                title: title,
                body: body,
            };
            try {
                await db.collection("mynotes").add(writeNote);
            } catch (error){
                console.log(error);
            }

        }


    };

    
    return (
        <div className="noteBoxModal">  
    

            <h1>Escribe tu nota</h1>

            <form className="newNote" onSubmit={setNotes}>
            
            <input onChange ={(e) => {
                setTitle(e.target.value);
            }} 
            type="text" 
            className="title"
            placeholder="Tema de tu nota"
            value={title}
            ></input>
            <br></br>
            <textarea  onChange ={(e) => {
                setBody(e.target.value);
            }}
             type="text"
            className="bodynote" 
            placeholder="¿Qué quieres recordar?" 
            value={body}
            ></textarea>
            <br></br>
            <button type="submit">
             Guardar nota</button>
             <button onClick= {props.onClose}>  Cancelar</button>

            </form>
            
          
              
             
         
        </div>
    )
    
}







