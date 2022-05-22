import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getCountries,filterContinent, filterActivity,orderByName,orderByPob, getActivities } from "../actions";
import {Link} from "react-router-dom"
import CountryCard from "./Card"
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import style from "./Home.module.css";

export default function Home(){
    const dispatch = useDispatch() //utilizar la constante y despachar acciones
   //traer todco lo que esta en el estado de countries
    const allCountries = useSelector((state)=> state.countries) //otra version, mapStateToProps
    const allActivities = useSelector((state)=> state.activities)
    //----------------------------------------------------PAGINADO
    const [orden, setOrden] = useState("");
    const [currentPage , setCurrentPage] = useState(1) //un estado con la pagina actual, la 1
    const [countriesPerPage, setCountriesPerPage] = useState(10) //quiero 10 por pagina
    const indexOflastCountry = currentPage * countriesPerPage //index = 10--------20
    const indexOflFirstCountry = indexOflastCountry - countriesPerPage //---------- 0---------10
    const [pageNumberLimit] = useState(5);
    const currentCountry = allCountries.slice(indexOflFirstCountry, indexOflastCountry)//agarrar arreglo de todo pero solo toma indice del primero y el ultimo  //cortar el arreglo y esa porcion son los paises que estan en la pagina actual/cada pagina
    const paginado = (pageNumber) =>{ //ayudar al renderizado
        setCurrentPage(Number(pageNumber.target.id))
    }
   //--------------------------------------------------------------
    const [activity, setActivity] = useState(null) //----------------------------------------------------------????????????????????
    
    //-------------------------------------------------------------
    //traer del estado los paises cuando el componente se monta
    useEffect(()=>{
    dispatch(getCountries()) //despachar acciones
    //dispatch(getActivities())
    },[dispatch] /*de lo que depende el componente*/)

    //------------------------------------------------------FILTRAR CONTINENTES
    function handleFilterContinent(e){
dispatch(filterContinent(e.target.value))
    }
      //------------------------------------------------------FILTRAR ACTIVIDAD
      function handleActivity(e) {
       
        if (e.target.value === "All") {
          dispatch(getCountries());
          setCurrentPage(1);
        } else {
          dispatch(filterActivity(e.target.value));
          setActivity(e.target.value);
          setCurrentPage(1);
        }
      
      }
       //------------------------------------------------------ORDENAR NOMBRES
      function handleOrder(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
      }
    //--------------------------------------------------------------------ORDENAR POBLACION
      function handleOrderPob(e) {
        e.preventDefault();
        dispatch(orderByPob(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
      }
//------------------------------------------------------
      function handleClick(e){//pasar un evento al boton para resetear
e.preventDefault();
dispatch(getCountries())
    }
    return(
        <nav>
            <div>
                    <Link to='/creacion'>
                            <button>
                        Crear Actividades
                        </button> 
                        </Link>
                        <h1>Titulo temporal</h1>
                        <button onClick={e=> {handleClick(e)}}>
                            Cargar Todos los paises
                        </button>
              </div>          
                <div>
        <select  onChange={(e) => handleOrderPob(e)}>
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
        <select onChange={(e) => handleOrder(e)}>
        <option value='asc'>{/*value siempre dentro de option para permitir acceder a lo que quiero*/}
                Ascendente
            </option>
            <option value='des'> 
                Descendente 
            </option>
        </select>
        <select onChange={(e) => handleFilterContinent(e)}> CONTINENTES
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
              name="actividad"
              onChange={(e) => handleActivity(e)}>
                                                                
            <option defaultValue value="ALL">
              Actividades
              </option>
              {allActivities?.map((e) => (
                <option key={e.id} value={e.name}>
                  {e.name}
                </option>
              ))}
        </select>
        <div className={style.paginado}>
        <Paginado
        countriesPerPage={countriesPerPage}
        allCountries={allCountries.length}
        paginado={paginado}
        pageNumberLimit={pageNumberLimit}
        />
        <SearchBar />
        </div>
              <div className={style.box}>
              {currentCountry?.map((el) => { //Existe? pues entonces mapea
            return (
                <div key={el.id}>             
                <CountryCard
                  id={el.id}
                  continent={el.continent}
                  name={el.name}
                  img={el.img}
                  activities={el.activities}
                  
                />
                 
                </div>
            );
          })}
        
    </div>
</div>
</nav>

    );


}