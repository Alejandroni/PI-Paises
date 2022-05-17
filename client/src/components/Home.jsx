import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getCountries, getActivities } from "../actions";
import {Link} from "react-router-dom"

export default function Home(){
    const dispatch = useDispatch() //utilizar la constante y despachar acciones
   //traer todco lo que esta en el estado de countries
    const allCountries = useSelector((state)=> state.countries) //otra version, mapStateToProps
    const allActivities = useSelector((state)=> state.activities)
    
    
    
    
    //traer del estado los paises cuando el componente se monta
    useEffect(()=>{
    dispatch(getCountries()) //despachar acciones
    dispatch(getActivities())
    },[dispatch] /*de lo que depende el componente*/)
    
    return(
        <div>
<Link to= '/actividades'>Crear Actividades</Link>
        </div>
    )


}