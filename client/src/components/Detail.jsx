import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Detail.module.css";
import { Link, useParams } from "react-router-dom";
import { detallePais } from "../actions";

export default function Detail() {
 
  const myCountry = useSelector((state)=>state.detail)
  let params = useParams()
  let dispatch = useDispatch()
 // console.log(myCountry)
  const id = params.id ? params.id : myCountry.id;
  useEffect(()=>{
    dispatch(detallePais(id))
},[dispatch, id])

return(

  <div className={style.contenedor}>

<div className={style.box}>
                        <Link to="/home">
                {" "}
                <button className={style.button}>Inicio</button>
              </Link>
              </div>

    <div className={style.card}>

    
    <h1>{myCountry.name}</h1>
    <h5>{myCountry.id}</h5>
    <img src={myCountry.flag} alt="not found" />
    <div className={style.text}>
            <label htmlFor="">Capital:</label>
            <h3 className={style.h3}>{myCountry.capital}</h3>
            <label htmlFor="">Continente:</label>
            <h3 className={style.h3}>{myCountry.subregion}</h3>
            <label htmlFor="">Area:</label>
            <h3 className={style.h3}>{myCountry.area}</h3>
            <label htmlFor="">Poblacion:</label>
            <h3 className={style.h3}>{myCountry.population}</h3>
    </div>
          <div>
          <h3>Actividades:{" "}</h3>
          <div className={style.padre}>
              {myCountry.activities?.map((actividad) => (
                <div className={style.hijo} key={actividad.id}>
                    <div className={style.actividad}>
                      <h5>{actividad.name}</h5>
                    </div>
                      <div>
                        <h5>Duracion: {actividad.time}</h5>
                        <h5>Dificultad: {actividad.level}</h5>
                        <h5>Temporada: {actividad.season}</h5>
                      </div>
                </div>
              ))}
            </div>
          </div>
          </div>
  </div>
)
}