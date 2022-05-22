import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Detail.module.css";
import { Link, useParams } from "react-router-dom";
import { detallePais } from "../actions";

export default function Detail() {
 
  
 //const paises = useSelector((store) => store.detail);
  //const dispatch = useDispatch()
  /*useEffect(()=>{
    dispatch(detallePais(props.params.id))
  },[dispatch])*/

  const myCountry = useSelector((state)=>state.detail)
  let params = useParams()
  let dispatch = useDispatch()
  console.log(myCountry)
  const id = params.id ? params.id : myCountry.id;
  useEffect(()=>{
    dispatch(detallePais(id))
},[dispatch, id])

return(
  <div>
    
    <h1>{myCountry.name}</h1>
    <h5>{myCountry.id}</h5>
    <img src={myCountry.img} alt="not found" />
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
          <h3>
              Actividades :{" "}
              {myCountry.activities?.map((actividad) => (
                <table key={actividad.id}>
                  <tbody>
                    <td></td>
                    <td className={style.actividad}>
                      <h5>{actividad.name}</h5>
                    </td>
                    <td></td>
                    <tr>
                      <td>
                        <h5>Duracion: {actividad.duration}</h5>
                      </td>
                      <td>
                        <h5>Dificultad: {actividad.level}</h5>
                      </td>
                      <td>
                        <h5>Temporada: {actividad.season}</h5>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ))}
            </h3>
          </div>
    {/*
   
      myCountry.length > 0 ? 
      <div>
        <h1>{myCountry[0].name}</h1>
        <img src={myCountry[0].img} alt="not found" />
      </div> : <p>Cargando...</p>
*/}

<div className={style.box}>
      <Link to="/home">
        {" "}
        <button className={style.button}>Inicio</button>
      </Link></div>
  </div>
)
}
 