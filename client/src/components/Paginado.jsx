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
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberList, setMaxPageNumberList] = useState(5);
  const [minPageNumberList, setMinPageNumberList] = useState(0);

    for(let i=1; i<=Math.ceil(allCountries/countriesPerPage); i++){ //recorrer un arreglo que toma lo que resulta de mis paises con los paises por pagina
        pageNumbers.push(i);//pushear numero para crear un arreglo de numeros
    }

    const handleNextbtn = ()=>{
      setPagActual(pagActual+5);
  
      if(pagActual+5>maxPageNumberList){
        setMaxPageNumberList(maxPageNumberList + pageNumberLimit);
        setMinPageNumberList(minPageNumberList + pageNumberLimit);
      }
    }
  
  
  
    const handlePrevbtn = ()=>{
      setPagActual(pagActual-5);
  
      if((pagActual-1)%pageNumberLimit===0){
        setMaxPageNumberList(maxPageNumberList - pageNumberLimit);
        setMinPageNumberList(minPageNumberList - pageNumberLimit);
      }
    }

    const renderPageNumbers = pageNumbers.map((number) => {
        console.log(pagActual)
        if (number < maxPageNumberList + 1 && number > minPageNumberList) {
          return (
            <li
              key={number}
              id={number}
              onClick={paginado}
             
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
          <button  onClick={handlePrevbtn}>PREV</button>
        </li>
            {renderPageNumbers}
            <li>
          <button onClick={handleNextbtn}>NEXT</button>
        </li>
          </ul>
        </nav>
      );

}