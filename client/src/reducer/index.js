//estado inicial antes de importar acciones
const initialState = {
    countries: [],
    allContinents: [] //copia de arreglo de paises para que no se borre despues de filtrar por continentes
   // activities: []
}

function rootReducer(state = initialState, action){ //traer paises

switch(action.type){
    case 'GET_COUNTRIES':
    return{  //siempre devuelve todo el estado y en el estado countries pasarle todo lo que mande la action getcountries
        ...state,
        countries:action.payload ,
        allContinents:action.payload
    };
    case 'FILTER_BY_CONTINENT':
    const allCountries = state.allContinents; //cuando se filtra, lo tiene todo por reserva para recuperar al momento de volver a filtrar
    //---------------que me llegue el select--------------------------------------------------cada uno de esos elementos mandados por paylos , filtralos y mandamelos
    const continentFilter = action.payload === 'ALL' ? allCountries : allCountries.filter((el)=> el.continent === action.payload)
return{
    ...state,
    countries: continentFilter
}
/*
    case 'GET_ACTIVITIES':
        return {
          ...state,
          activities: action.payload,
          allActivities: action.payload,
        };*/
        default:
    return state;
}

}
export default rootReducer;