import { useState } from "react";
import Card from "./Components/Card";
import './App.css'

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs

  const [datos, setDatos] = useState({
    nombre: '',
    pajaro: '',
  })
  console.log(datos);

  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (event) =>{
    event.preventDefault()

    const nombreTrim = datos.nombre.trimStart()

    if(nombreTrim.length == datos.nombre.length && datos.nombre.length >= 3 && datos.pajaro.length >= 6){
      setEnviado(true)
      setError(false)
    }else{
      setError(true)
    }

}

  return (
    <div className="App">

    <div> 

    <h1>¿Cuál es tu pájaro favorito?</h1>

    {enviado ? <Card datos={datos}/> : 
    <form className="formulario" onSubmit={handleSubmit}>
    <label> Nombre 
    <input type="text" value={datos.nombre} onChange={(e) => setDatos({...datos, nombre: e.target.value})}/>
    </label>
    <label> Pájaro favorito 
    <input type="text" value={datos.pajaro} 
    onChange={(e) => setDatos({...datos, pajaro: e.target.value})}
    />
    </label>
    <button type="submit" style={{backgroundColor:"coral"}}>Submit</button>

    </form>
    }

    {error && <p style={{color:"red"}}>Por favor chequea que la información sea correcta</p>}

    </div>

    </div>

  );
}

export default App;
