//estado inicial antes de importar acciones
const initialState = {
    countries: [],
    activities: []
}

function rootReducer(state = initialState, action){ //traer paises
// eslint-disable-next-line default-case
switch(action.type){
    case 'GET_COUNTRIES':
    return{  //siempre devuelve todo el estado y en el estado countries pasarle todo lo que mande la action getcountries
        ...state,
        countries:action.payload 
    };
/*
    case 'GET_ACTIVITIES':
        return {
          ...state,
          activities: action.payload,
          allActivities: action.payload,
        };*/
}

}
export default rootReducer;