import React from 'react';
import ReactDOM from 'react-dom/client';
import Registro from './componentes/Registro';
import Detalles from './componentes/Detalles';
import Login from './componentes/Login';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route,Routes,Link,Outlet} from "react-router-dom"; 
import ListarJugadores from './componentes/ListarJugadores';
import AgregarJugador from './componentes/AgregarJugador';
import Home from './componentes/Home';
import './hojas-de-estilo/Estilos2.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
<BrowserRouter>
<Routes>

<Route path="/" element={<Login/>}></Route>
    
<Route path="/home" element={<Home/>}>
    <Route index element={<Detalles/>}/>
    <Route path="listarJugadores" element={<ListarJugadores/>}/>
    <Route path="agregarJugador" element={<AgregarJugador/>}/>
</Route>
  
<Route path="/registro" element={<Registro/>}></Route>


</Routes>
</BrowserRouter>


);

/*

<BrowserRouter>
<Routes>

    <Route path="/" element={<Login/>}/>
    <Route path="/registro" element={<Registro/>}/>
    
</Routes>
</BrowserRouter>



*/