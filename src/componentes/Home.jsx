import React from 'react'
import  {Link,Outlet}  from "react-router-dom";



export default function Home() {
  return (


    
<body>
<Link to="detalles" className="nav-link"></Link>

    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <span class="navbar-brand col-md-3 col-lg-2 me-0 px-3">Nombre del usuario</span>
            <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-nav">
                <div class="nav-item text-nowrap">
                <Link to="/" className="nav-link px-3">CERRAR SESION</Link> 
                </div>
            </div>
     </header>
        
    
        <div class="container-fluid">
            <div class="row">
                <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div class="position-sticky pt-3">
                        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">Usuarios</h6>
                        <ul class="nav flex-column">
    
                            <li class="nav-item">
                            <Link to="/home" className="nav-link">Home</Link>
                            </li>
                        </ul>
    
                        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">Administrador "ROL"</h6>
                        <ul class="nav flex-column mb-2">
                                <li class="nav-item">
                                <Link to="listarJugadores" className="nav-link">Listar Jugadores</Link>
                                </li>

                                <li class="nav-item">
                                <Link to="agregarJugador" className="nav-link">Agregar Jugador</Link>
                                </li>
                                
                        </ul>
                     
                            



      
                    </div>
              </nav>
         </div>
         
        </div>
 
        <main class="p-3 col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1>Titulo</h1>       
                </div>
                <Outlet />
        </main>

        

       


</body>


  )
}
