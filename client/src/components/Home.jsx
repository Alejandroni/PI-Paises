import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import {
  filterContinentes,
  traerPaises,
  filtrarActividad,
  traerActividad,
  orderByName,
   orderByPob, } from "../actions";
import {Link} from "react-router-dom"
import Card from "./Card"
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import style from "./Home.module.css";

export default function Home(){
  const dispatch = useDispatch();// usar la constante para despachar las acciones
  const todosPaises = useSelector((state) => state.paises); //arreglo del estado que lo trae del reducer
  const todasActividades = useSelector((state) => state.actividades);
 //const [ordenado, setOrden] = useState("");
  const [pagActual, setPagActual] = useState(1); // Mi pagina actual sera 1
  const paisesPorPag = 10; // Cantidad de paises que quiero por pag.
  const pageNumberLimit = 5;
  const indexOfUltimoPais = pagActual * paisesPorPag; // 10----------20
  const indexOfPrimerPais = indexOfUltimoPais - paisesPorPag; // 0---------10
  const paisActual = todosPaises.slice(indexOfPrimerPais, indexOfUltimoPais); //traer el estado

  const paginado = (e) => {
    setPagActual(Number(e.target.id));
  };
  //console.log(pagActual)
  useEffect(() => {
    dispatch(traerPaises());
    dispatch(traerActividad());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(traerPaises());
    setPagActual(1);
   
  }
 
//-------------------------------------------------------------------------------------------------------------------CONTINENTES
  function handleFilterContinent(e) { 
    dispatch(filterContinentes(e.target.value));
    setPagActual(1);
    }
//-------------------------------------------------------------------------------------------------------------------ACTIVIDADES
  function handleActivity(e) { //filtro de actividades
    if (e.target.value === "All") {
      dispatch(traerPaises());
      setPagActual(1);
    } else {
      dispatch(filtrarActividad(e.target.value));
      setPagActual(1);
    }
  }
//------------------------------------------------------------------------------------------------------------------- A-Z
  function handleOrder(e) {
   
    console.log(e.target.value)
    dispatch(orderByName(e.target.value));
   

  }
//-------------------------------------------------------------------------------------------------------------------POBLACION
  function handleOrderPob(e) {
      dispatch(orderByPob(e.target.value));
   }
 
 // console.log(ordenado)
  return (
    <div >
      <div className={style.Nav}>
        <nav>
        
          <div className={style.container}>
          <SearchBar />
            <Link className={style.link} to="/actividades">
              <button className={style.button}>Crear Actividad</button>
            </Link>
            <button
              className={style.button}
              onClick={(e) => {
                handleClick(e);
              }}
            >
              Borar filtros
            </button>
           
            <select className={style.select} onChange={(e) => handleOrder(e)}>
              <option value="All" >Filtrar por A-Z</option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
              <select
              className={style.select}
              onChange={(e) => handleOrderPob(e)}
            >
              <option value="All" >PoB</option>
              <option value="may">Mayor</option>
              <option value="men">Menor</option>
            </select>
           
            <select
              className={style.select}
              onChange={(e) => handleFilterContinent(e)}
            >
              <option value="All" >Buscar Continente</option> 
              <option value="North America">America del Norte</option>
              <option value="South America">America del Sur</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europa</option>
              <option value="Africa">Africa</option>
              <option value="Oceania">Oceania</option>
              <option value="Antarctica">Antartida</option>
            </select>
            <select
              className={style.select}
              name="actividad"
              onChange={(e) => handleActivity(e)}
            >
              <option defaultValue value="All">
                Actividades
              </option>
              {todasActividades?.map((e) => (
                <option key={e.id} value={e.name}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
        </nav>

        <div className={style.paginado}>
          <Paginado
            paisesPorPag={paisesPorPag}
            todosPaises={todosPaises}
            pageNumberLimit={pageNumberLimit}
            paginado={paginado}
          ></Paginado>
          
        </div>

        <div className={style.box}>
          {paisActual?.map((el) => {
            return (
              <div key={el.id}>
              
                <Card
                  id={el.id}
                  name={el.name}
                  img={el.flag}
                  continent={el.continent}
                  activities={el.activities}
                
                />
            
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
