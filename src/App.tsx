import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'
function App() {

  return (
    <>
    <div className="container">
      <img src={logo} alt="logo frases" className='logo' />
      <h2 className="title">Categorias</h2>
      <section className='category-area'>
        <button className='category-button'>Motivação</button>
        <button className='category-button'>Bem estar</button>
      </section>

      <button className="button-frase">Gerar frase</button>

      <h2 className="textoFrase">alguma frase vai vir aqui</h2>
    </div>
    </>
  )
}

export default App