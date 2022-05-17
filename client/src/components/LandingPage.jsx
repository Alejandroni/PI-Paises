import React from "react";
import {Link} from "react-router-dom";

export default function LandingPage(){
    console.log("aparece!")
    return(
        <div>
                <h1>Bienvenidos a mi mega Pagina</h1>
                <Link to ="/home">
                    <button>Ingresar</button>
                </Link> 
        </div>
    )
}