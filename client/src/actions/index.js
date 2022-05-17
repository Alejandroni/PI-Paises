import axios from "axios";
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
