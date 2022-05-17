//estado inicial antes de importar acciones
const initialState = {
    countries: [],
    allContinents: []
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