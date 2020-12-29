import React, { useState } from 'react';
import data from './data';
import List from './List';


function App() {
  const [people, setPeople] = useState(data)

  // fecha actual
  var fecha = new Date();
  // trae solo el dia
  var dia = fecha.getDate();
  // trae el mes pero enero es el 0
  var mes = (fecha.getMonth() + 1);
  // trae el año
  var ano = fecha.getFullYear();

  return (

    <div id="color-fondo" >
        <section className="container pl-4">
      {/* <p> {dia} / {mes} / {ano} </p> */}
        <h3>{people.length} birthday today</h3>
        <List people={people} />
      </section>
    </div>
  )
    ;
}

export default App;