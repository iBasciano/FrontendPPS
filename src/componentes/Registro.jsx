import React from 'react'
import  {Link}  from "react-router-dom";
export default function Registro() {
  return (
    
<div className="container">
    
        
    <h3>Insertar datos del usuario</h3>

    <div className="mb-3">
        <label for="nombre" className="form-label">Nombre</label>
        <input type="text" className="form-control" id="nombre" name="nombre" />
    </div>

    <div className="mb-3">
        <label for="apellido" className="form-label">Apellido</label>
        <input type="text" className="form-control" id="apellido" name="apellido" />
    </div>

    <div className="mb-3">
        <label for="dni" className="form-label">DNI</label>
        <input type="text" className="form-control" id="dni" name="dni" />
    </div>

    <div className="mb-3">
        <label for="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" name="email" />
    </div>

    <div className="mb-3">
        <label for="clave" className="form-label">Clave</label>
        <input type="password" className="form-control" id="clave" name="clave" />
    </div>

    <div className="mb-3">
        <label for="confirmarClave" className="form-label">Confirmar Clave</label>
        <input type="password" className="form-control" id="confirmarClave" name="confirmarClave"/>
    </div>

    
    <div style={{textAlign: "center"}}>
        <button type="submit" className="btn btn-primary m-1">Enviar</button><br/>

        <Link to="/" type="button" className="btn btn-primary m-1">Volver</Link>
      
    </div>

   



</div>


  )
}

// FALTARIA AGREGAR ROL, SOLAMENTE PUEDE EL ADMINISTRADOR. 