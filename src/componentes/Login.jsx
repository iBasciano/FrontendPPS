import React from 'react'
import 'react-bootstrap'
import { Button, Col, Form, Row } from 'react-bootstrap'
import  {Link}  from "react-router-dom";

export default function Login() {
  return (
    
<body className="text-center">



<main className="form-signin">
  <form method="post" action="<?= base_url('ingresar') ?>">
    <img className="mb-4" src="<?= esc(base_url('assets/user.svg')) ?>" alt="" width="72" height="57"/>
    <h1 className="h3 mb-3 fw-normal">Ingrese su usuario</h1>

    <div className="form-floating">
      <input type="text" class="form-control" id="dni" name="dni"/>
      <label for="dni" style={{textAlign:"start"}}>
        DNI
      </label>
    </div>

    <div className="form-floating">
      <input type="password" class="form-control" id="clave" name="clave"/>
      <label for="clave" class="text-left" style={{textAlign:"start"}} >Clave</label>
    </div>

    <Link to="/home" class="w-100 btn btn-lg btn-primary mb-1"><span>Identificarse</span> </Link>
    <Link to="/registro" class="w-100 btn btn-lg btn-primary"><span> Registrarse</span>  </Link>
    <p className="mt-5 mb-3 text-muted">&copy; Agregar algun tipo de texto</p>
  </form>
 

  
</main>


</body>


  )
}
