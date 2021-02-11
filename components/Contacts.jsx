import React from "react";
import Card from "./Card";
import contacts from "../contacts";
let d = 0;



function Contacts() {
  for (i = 0; i < contacts; i++) {
    d+i;
  }
  d++;
  return (
    <div>
      
      <h1 style={{ fontFamily: "Helvetica" }}>Kontakty</h1>
      <div class="shadow-lg p-3 mb-5 bg-body rounded">
        <Card
          name={contacts[i].name}
          img={contacts[i].img}
          email={contacts[i].email}
          tel={contacts[i].tel}
        />
      </div>
      <div class="shadow-lg p-3 mb-5 bg-body rounded">
        <Card
          name={contacts[i+d].name}
          img={contacts[i+d].img}
          email={contacts[i+d].email}
          tel={contacts[i+d].tel}
        />
      </div>
      <div class="shadow-lg p-3 mb-5 bg-body rounded">
        <Card
          name={contacts[2].name}
          img={contacts[2].img}
          email={contacts[2].email}
          tel={contacts[2].tel}
        />
      </div>
    </div>
  );
}


export default Contacts;
