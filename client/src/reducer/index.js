//estado inicial antes de importar acciones
const initialState = {
    countries: [],
    allContinents: [], //copia de arreglo de paises para que no se borre despues de filtrar por continentes
    activities: [], //meter los paises filtrados
    allActivities: [],
    detail: {}
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

case "GET_DETAIL": //-------------------------------------------traer info de cada pais
    return {
      ...state,
      detail: action.payload,
    };
case "GET_ACTIVITY": //--------------------------------------traer Actividades de cada pais
    return {
      ...state,
      countries: action.payload,
    };
    case 'FILTER_BY_ACTIVITY': //--------------------------------------Filtro por actividades
       
        const prueba = state.allContinents.filter((el) => {
            var y = el.activities.find(
              (x) => x.name.toLowerCase() === action.payload.toLowerCase()
            );
            return y !== undefined;
          });
          return {
            ...state,
            countries: prueba,
          };

          case "GET_QUERY_COUNTRY":
            return {
              ...state,
              countries: action.payload,
            };
            
          case "ORDER_BY_NAME":
            let sortedArr =
              action.payload === "asc"
                ? state.countries.sort(function (a, b) {
                    if (a.name > b.name) {
                      return 1;
                    }
                    if (a.name < b.name) {
                      return -1;
                    }
                    return 0;
                  })
                : state.countries.sort(function (a, b) {
                    if (a.name > b.name) {
                      return -1;
                    }
                    if (a.name < b.name) {
                      return 1;
                    }
                    return 0;
                  });
            return {
              ...state,
              paises: sortedArr,
            };
          case "ORDER_BY_POB":
            let sortedPob =
              action.payload === "men"
                ? state.countries.sort(function (a, b) {
                    if (a.population > b.population) {
                      return 1;
                    }
                    if (a.population < b.population) {
                      return -1;
                    }
                    return 0;
                  })
                : state.countries.sort(function (a, b) {
                    if (a.population > b.population) {
                      return -1;
                    }
                    if (a.population < b.population) {
                      return 1;
                    }
                    return 0;
                  });
            return {
              ...state,
              countries: sortedPob,
            };
            case 'POST_ACTIVITY':
             return{
               ...state,
             }
        default:
    return state;
}

}
export default rootReducer;