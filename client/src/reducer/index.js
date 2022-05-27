const initialState = {
  paises: [],
  allPaises: [],
  actividades: [],
  allActividades: [],
  detail: {},
};
//------------------------------------------------------------------traer paises
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PAISES":
      return {
        ...state,
        paises: action.payload,
        allPaises: action.payload,
      };
//------------------------------------------------------------------FILTRAR CONTINENTES
      case "FILTER_BY_CONTINENT":
      const allPaises = state.allPaises;
      //console.log(allPaises)
      const contiFiltrados =
        action.payload === "All"
          ? allPaises
          : allPaises.filter((el) => el.continent === action.payload);
      //console.log(contiFiltrados)
      return {
        ...state,
        paises:
          contiFiltrados /* state.allContinentes.filter(el => el.continent === action.payload) */,
      };
//------------------------------------------------------------------DETALLE DEL PAIS
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };
//--------------------------------------------------------------------- pais por query
    case "GET_QUERY_COUNTRY":
      return {
        ...state,
        paises: action.payload,
      };
//-------------------------------------------------------------------------traer paises
    case "GET_ACTIVIDADES":
      return {
        ...state,
        actividades: action.payload,
        allActividades: action.payload,
      };

   

    case "FILTER_BY_ACTIVITY":
      
      const prueba = state.allPaises.filter((el) => {
        var y = el.activities.find(
          (x) => x.name.toLowerCase() === action.payload.toLowerCase()
        );
        return y !== undefined;
      });
      return {
        ...state,
        paises: prueba,
      };

      case "ORDER_BY_NAME":
        
            let sortedArr = [...state.paises]
            sortedArr = sortedArr.sort((a,b) => {
              
                if(a.name<b.name){
                    return action.payload === "asc" ? -1 : 1;
                }
                if(a.name>b.name){
                    return action.payload ==="asc" ? 1 : -1;
                }
              return "Ordenado"
            })
            return{
                ...state,
                paises: sortedArr
            }

    case "ORDER_BY_POB":
      let sortedPob = [...state.paises]
      sortedPob = sortedPob.sort((a,b) => {
                if(a.population<b.population){
                    return action.payload === "men" ? -1 : 1;
                }
                if(a.population>b.population){
                    return action.payload ==="men" ? 1 : -1;
                }
                return "ordenado"
            })
            return{
                ...state,
                paises: sortedPob
            }

         
      
            
    default:
      return state;
  }

}

export default rootReducer;
