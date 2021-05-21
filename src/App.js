import { useEffect, useState } from "react";
import {Base123} from './Base123'

export const App = () => {


  const [jsonImagen, setJsonImagen] = useState(false)

  useEffect(() => {

    miFuncion();
   
  }, [])



  const miFuncion = async ()=>{
    const respuesta =  await fetch('http://127.0.0.1:5500/ejemplo/public/JSON/dashboard.html');
    const body = await respuesta.json();
    const {imagen} = body

    
    setJsonImagen(imagen)

  }


  return (
    <div className="App">
      <h1>Hola</h1>
       {
        jsonImagen !== false
        ?
        <Base123  imagen={jsonImagen } />
        : <h1>cargando ....</h1>
      } 
    </div>
  );
}
