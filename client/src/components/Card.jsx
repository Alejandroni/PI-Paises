import React from "react";
import { useDispatch } from "react-redux";
import { detallePais } from "../actions";
import { Link } from "react-router-dom";
import style from "./Card.module.css"

export default function CountryCard({img, name, continent, id}){
    const dispatch = useDispatch();
return (
<div className={style.tarjeta}>

<h3 className={style.title}>{continent}</h3>
<h5 className={style.h5}>{name}</h5>
<Link
        to={`/home/${id}`}
        onClick={() => dispatch(detallePais(id))}
      >
        <img className={style.img} src={img} alt="img not found"></img>  
      </Link>
      
</div>
);

}