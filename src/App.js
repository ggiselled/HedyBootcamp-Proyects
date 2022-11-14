import './App.css';
import { BrowserRouter, Route, Link, Routes, Form } from 'react-router-dom';


import { useState, useEffect } from 'react';
import { Home } from './Home';
import { ComponenteAuto } from './Componente';
import { CriptoApp } from './Cripto';
import { Contador } from './Counter';
import { VerMascota } from './MostrarImg';
import { RutaError } from './RutaError';
import { Eventos } from './Eventos';
import { Forms } from './Formulario';
import {Sincro} from './LevantarEstado';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <nav className='App__nav'>
          <Link to='/Home' className='nav__link'>Inicio</Link>
          <Link to='/Cripto' className='nav__link'>CriptoApp</Link>
          <Link to='/Counter' className='nav__link'>Contador</Link>
          <Link to='/Componente' className='nav__link'>Comprar vehículo</Link>
          <Link to='/MostrarImg' className='nav__link'>Ver mascotas</Link>
          <Link to='/Eventos' className='nav__link'>Eventos</Link>
          <Link to='/Formulario' className='nav__link'>Formulario</Link>
          <Link to='/LevantarEstado' className='nav__link'>Levantar estado</Link>
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
        <Route exact path='/LevantarEstado' element={<Sincro/>}/>


        <Route path='*' element={<RutaError/>}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
