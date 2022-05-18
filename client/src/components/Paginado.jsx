import React, { useState } from "react";
import style from "./Paginado.module.css";
export default function Paginado({
    countriesPerPage, allCountries, paginado,
}){
    const pageNumbers = []//declaro arreglo vacio que recibe el numero redondo del for
    const [pagActual, setPagActual] = useState(1);
 // const indexOfUltimoPais = pagActual * countriesPerPage; // 10
 // const indexOfPrimerPais = indexOfUltimoPais - countriesPerPage; // 0
  //const paisActual = allCountries.slice(indexOfPrimerPais, indexOfUltimoPais);
  const [pageNumberLimit] = useState(10);
  const [maxPageNumberList, setMaxPageNumberList] = useState(10);
  const [minPageNumberList, setMinPageNumberList] = useState(0);

    for(let i=1; i<=Math.ceil(allCountries/countriesPerPage); i++){ //recorrer un arreglo que toma lo que resulta de mis paises con los paises por pagina
        pageNumbers.push(i);//pushear numero para crear un arreglo de numeros
    }


    const renderPageNumbers = pageNumbers.map((number) => {
        console.log(pagActual)
        if (number < maxPageNumberList + 1 && number > minPageNumberList) {
          return (
            <li
              key={number}
              id={number}
              onClick={paginado}
              //className={pagActual == number ? style.active : null}
            >
              {number}
            </li>
          );
        } else return null;
      });
    
      return (
        <nav>
           <ul className={style.pageNumbers}>
           <li>
          <button>PREV</button>
        </li>
            {renderPageNumbers}
            <li>
          <button>NEXT</button>
        </li>
          </ul>
        </nav>
      );
    /*
    return( ///renderizar los numeros
    <nav>
        <ul className='paginado'>
            {pageNumbers && pageNumbers.map(number =>{//si hay un arreglo.. mapealo y devolveme los numeros del mapeado/ //cuando haga click en el link le voy a pasar mi paginado con el numero de paginas
                <li>
                <a onClick={()=> paginado(number)}>{number}</a> 
                </li>
            })}
        </ul>
    </nav>
    )*/
}