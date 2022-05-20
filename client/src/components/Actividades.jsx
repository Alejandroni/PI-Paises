import React, { useState , useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
//import style from "./ActivityCreate.module.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CreacionDeActividades(){
    const dispatch = useDispatch()
    const paisCre = useSelector((state) => state.allContinents);
    const [validate, setValidate] = useState({});
    const [input,setInput] = useState({
        name: "",
        level:"1",
        duration: "",
        season:"Verano",
        Paises:[],
        Pais:"",
    })
    /* useEffect(()=>{
     dispatch() 
  })*/
return(
    <div>
        <Link to='/home'><button>Volver</button></Link>
        <h1>
            Crea tu actividad
        </h1>
        <form>
            <div>
                <label>Nombre</label>
                <input
                type="text"
                value={input.name}
                name="name"
                />

            </div>
            <div>
                <label>Dificultad</label>
                <input
                type="text"
                value={input.name}
                name="name"
                />
                
            </div>
            <div>
            {validate.name && <h5>{validate.name}</h5>} <br /> <br />
            <label>Dificultad:</label>
          <select name="level" >
            <option name="level" value="1">
              {" "}
              1{" "}
            </option>
            <option name="level" value="2">
              {" "}
              2{" "}
            </option>
            <option name="level" value="3">
              {" "}
              3{" "}
            </option>
            <option name="level" value="4">
              {" "}
              4{" "}
            </option>
            <option name="level" value="5">
              {" "}
              5{" "}
            </option>
          </select>{" "}
          <br />
          <br />
            </div>
            <div>
                <label>Duración</label>
                <input
                type="text"
                value={input.duration}
                name="duration"
                />
                
            </div>
        </form>
    </div>
)
}