import axios from 'axios';
//traer personajes
export function getCountries(){
    return async function(dispatch){ //ruta del back que trae los paises
        var json = await axios.get('http://localhost:3001/paises')//por default hace el get pero dejemoslo por si las moscas;
        return dispatch({
            //necesito type y payload para despachar
            type:'GET_COUNTRIES',
            payload: json.data
        })
    }
}
export function getActivities(){
    return async function(dispatch){ //ruta del back que trae los paises
        var json = await axios.get('http://localhost:3001/actividades')//por default hace el get pero dejemoslo por si las moscas;
        return dispatch({
            //necesito type y payload para despachar
            type:'GET_ACTIVITIES',
            payload: json.data
        })
    }
}
export function getPaises(name){ //name llega por lo que me manden de la busqueda
    return async function(dispatch){
        try{
          var queryPaises = await axios.get('http://localhost:3001/paises/nombre?name=' + name);  
          return dispatch({
              type: 'GET_QUERY_COUNTRY',
              payload: queryPaises.data
          })
        } catch(err){
            console.log(err)
        }
        
    }
}
export function filterContinent(payload){ //payload === value del input
    console.log(payload)
    return{
        type: 'FILTER_BY_CONTINENT',
        payload
    }
}
export function filterActivity(payload){
    return{
        type: "FILTER_BY_ACTIVITY", payload
    }
}

export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function orderByPob(payload){
    return{
        type: 'ORDER_BY_POB',
        payload
    }
}

export function detallePais(id){
    return async function(dispatch){
        var country = await axios.get('http://localhost:3001/paises/'+id);
        console.log(country)
        return dispatch({
            type: 'GET_DETAIL',
            payload: country.data
        })
    }
}

export function postActividad(payload){
    return async function(){
        const res = await axios.post('http://localhost:3001/actividades', payload);
        console.log(res)
        return res;
    }
}
