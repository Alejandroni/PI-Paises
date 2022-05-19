import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPaises } from "../actions";
import style from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
  const dispatch = useDispatch();//hooks
  const [name, setName] = useState("");//corcheteo en string vacio
 

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value); //el value del input va a tomar el value del state
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getPaises(name));
    setName(""); // Limpia el input
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar Pais"
        onChange={(e) => handleInputChange(e)}
        value={name}
      />
      <button className={style.button} type="submit" onClick={(e) => handleSubmit(e)}>
        BUSCAR
      </button>
    </div>
  );
}
