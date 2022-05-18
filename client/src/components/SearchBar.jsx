import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPaises } from "../actions";
import style from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
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
        placeholder="Search Country"
        onChange={(e) => handleInputChange(e)}
        value={name}
      />
      <button className={style.button} type="submit" onClick={(e) => handleSubmit(e)}>
        BUSCAR
      </button>
    </div>
  );
}
