import React from 'react';
import {CreateNote} from './CreateNote'
import '../App.css'

export const Modal = (props) => {
    console.log(props)
    return (
        props.open && (
        <div className="modal">
            <div className="modalcontent">
            <CreateNote note={props.note}/>
            </div>

        </div>
    )
    
    );


};

