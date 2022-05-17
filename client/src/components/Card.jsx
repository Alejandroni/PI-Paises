import React from "react";

export default function countryCard({img, name, continent}){
return (
<div>
<img src={img} alt="img not found" />
<h3>{name}</h3>
<h5>{continent}</h5>
</div>
);

}