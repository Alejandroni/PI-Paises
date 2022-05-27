import axios from 'axios';
//----------------------------------------------------------------------------------------------GET PAISES
export function traerPaises(){

    
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/countries');
        
        return dispatch({
            type: 'GET_PAISES',
            payload: json.data
        })
    }
}
//----------------------------------------------------------------------------------------------CONTINENTE
export function filterContinentes(payload){
    //console.log(payload)
    return{
        type: "FILTER_BY_CONTINENT",
        payload
    }
}
//----------------------------------------------------------------------------------------------GET PAISES ID
/*export function detallePais(id){
    return async function(dispatch){
        try{
        var pais = await axios.get('http://localhost:3001/countries/'+id);
      //  console.log(pais)
          return dispatch({
            type: 'GET_DETAIL',
            payload: pais.data
        })
    }catch(error){
        console.log(error)
    }
    }
}*/
export function detallePais(id){
    return function(dispatch){
        axios.get(`http://localhost:3001/countries/${id}`)
        .then(detalle=>{
            dispatch({
                type: 'GET_DETAIL',
            payload: detalle.data
            })
        })
    }
}
//----------------------------------------------------------------------------------------------GET PAISES QUERY
export function buscarPaises(name){
    return async function(dispatch){
        try{
          var queryPaises = await axios.get('http://localhost:3001/countries?name=' + name);  
          return dispatch({
              type: 'GET_QUERY_COUNTRY',
              payload: queryPaises.data
          })
        } catch(err){
            console.log(err)
        }
        
    }
}
//----------------------------------------------------------------------------------------------GET ACTIVIDADES
export function traerActividad(){
    return async function(dispatch){
        try{
            const actividad = await axios.get('http://localhost:3001/actividades');
            return dispatch({
                type: 'GET_ACTIVIDADES',
                payload: actividad.data
            })
        } catch(err){
            console.log(err)
        }
    }
}
//----------------------------------------------------------------------------------------------POST ACTIVIDADES
export function postActividad(payload){
    return async function(){
        const res = await axios.post('http://localhost:3001/actividades', payload);
        console.log(res)
        return res;
    }
}
//----------------------------------------------------------------------------------------------FILTROS
//----------------------------------------------------------------------------------------------ACTIVIDAD
export function filtrarActividad(payload){
    return{
        type: 'FILTER_BY_ACTIVITY',
        payload
    }
}
//----------------------------------------------------------------------------------------------AZ - ZA
export function orderByName(payload){
   // console.log(payload)
    return{
        type: 'ORDER_BY_NAME',
        payload: payload
    }
}
//---------------------------------------------------------------------------------------------- POBLACION
export function orderByPob(payload){
    return{
        type: 'ORDER_BY_POB',
        payload: payload
    }
}
