import React from "react";
function Card(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.name}</h2>
      <img
        src={props.img}
        alt={props.name}
        className="rounded-circle"
        width="120"
        height="120"
      />
      <p className="font-weight-bold"> 
      <a href="mailto:{props.email}">
      
      E-mail: {props.email} </a> </p>
      <p className="font-weight-bold">Telefon: {props.tel}</p>
    </div>
  );
}

export default Card;
