import React, { useState, useEffect } from "react";
import { getNotes, deleteNotes } from "../Config";
import { Modal } from "./Modal";
import pencil from "../Assets/pencil.png";
import "./Print.css";

export const Print = () => {
  const [Note, setNote] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const print = async () => {
      const { docs } = await getNotes;
      const newArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      setNote(newArray);
    };
    print();
  }, []);

  const hideModal = () => {
    setOpen(false);
  };

  const showModal = () => {
    setOpen(true);
  };

  const deleted = async (id) => {
    try {
      await deleteNotes(id);
      const { docs } = await getNotes;
      const newArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      setNote(newArray);
    } catch (e) {
      e("No se pudo eliminar tu nota");
    }
  };

  return (
    <>
      <div className="noteBox">
        {Note.length !== 0 ? (
          Note.map((item) => (
            <div key={item.id} className="singlebox">
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <button
                className="buttonNote"
                onClick={() => {
                  setSelectedNote(item);
                  showModal();
                  console.log("modal opened");
                }}
              >
                Editar
              </button>
              <button
                className="buttonNote"
                onClick={(id) => {
                  deleted(item.id);
                }}
              >
                Borrar
              </button>
            </div>
          ))
        ) : (
          <span>Sin notas</span>
        )}

        <Modal onClose={hideModal} open={open} note={selectedNote} />
      </div>
      <a
        onClick={() => {
          showModal();
        }}
      >
        <img className="pencil" src={pencil} />
      </a>
    </>
  );
};
