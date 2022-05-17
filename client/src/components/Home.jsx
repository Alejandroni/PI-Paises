import React, { useEffect, /*useState*/ } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getCountries, getActivities } from "../actions";
import {Link} from "react-router-dom"
import Card from "./Card"

export default function Home(){
    const dispatch = useDispatch() //utilizar la constante y despachar acciones
   //traer todco lo que esta en el estado de countries
    const allCountries = useSelector((state)=> state.countries) //otra version, mapStateToProps
    //const allActivities = useSelector((state)=> state.activities)
    
    
    
    
    //traer del estado los paises cuando el componente se monta
    useEffect(()=>{
    dispatch(getCountries()) //despachar acciones
    dispatch(getActivities())
    },[dispatch] /*de lo que depende el componente*/)
    
    
    function handleClick(e){//pasar un evento al boton para resetear
e.preventDefault();
dispatch(getCountries())
    }
    return(
        <nav>
        <div>
        <Link to='/actividades'>
       <button>
           Crear Actividades
           </button> 
        </Link>
    <h1>Titulo temporal</h1>
    <button onClick={e=> {handleClick(e)}}>
        Cargar Todos los paises
    </button>
    <div>
        <select>
        <option value=''>{/*value siempre dentro de option para permitir acceder a lo que quiero*/}
                Población 
            </option>
            <option value='may'>{/*value siempre dentro de option para permitir acceder a lo que quiero*/}
                Mayor
            </option>
            <option value='men'>
                Menor 
            </option>
        </select>
        <select>
        <option value='asc'>{/*value siempre dentro de option para permitir acceder a lo que quiero*/}
                Ascendente
            </option>
            <option value='des'>
                Descendente 
            </option>
        </select>
        <select>{/*status*/}
              <option value="All">Continentes</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europa</option>
              <option value="Africa">Africa</option>
              <option value="Oceania">Oceania</option>
              <option value="Antartida">Antártida</option>
        </select>
        <select>
                                                                  {/**personajes */}
            <option defaultValue value="ALL">Actividades</option>
        </select>
        {
            //vamos a recorrer todo
            //pregunto si hay paises 
           // eslint-disable-next-line array-callback-return
           allCountries && allCountries.map(el=>{
               <Card   
               id={el.id}
               name={el.name}
               img={el.img}
              // continent={el.continent}
              // activities={el.activities}
               />
           })
        }
    </div>
</div>
</nav>

    );


}