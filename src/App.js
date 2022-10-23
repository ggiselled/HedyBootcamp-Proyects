import './App.css';
import { BrowserRouter, Route, Link, Routes, Form } from 'react-router-dom';


import { useState, useEffect } from 'react';
import { Home } from './Home';
import { ComponenteAuto } from './Componente';
import { CriptoApp } from './Cripto';
import { Contador } from './Counter';
import { VerMascota } from './MostrarImg';
import { RutaError } from './RutaError';
import { Eventos } from './Eventos'
import { Forms } from './Formulario'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to='/Home'>Inicio</Link>
          <Link to='/Cripto'>CriptoApp</Link>
          <Link to='/Counter'>Contador</Link>
          <Link to='/Componente'>Comprar vehículo</Link>
          <Link to='/MostrarImg'>Ver mascotas</Link>
          <Link to='/Eventos'>Eventos</Link>
          <Link to='/Formulario'>Formulario</Link>
        </nav>

        <Routes>
        <Route exact path='/Home' element={<Home/>}/>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Cripto' element={<CriptoApp/>}/>
        <Route exact path='/Counter' element={<Contador/>}/>
        <Route exact path='/Componente' element={<ComponenteAuto/>}/>
        <Route exact path='/MostrarImg' element={<VerMascota/>}/>
        <Route exact path='/Eventos' element={<Eventos/>}/>
        <Route exact path='/Formulario' element={<Forms/>}/>


        <Route exact path='/RutaError' element={<RutaError/>}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
