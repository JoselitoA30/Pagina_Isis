import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nosotros from '../Componentes/nosotros'
import Que from '../Componentes/que'
import Contexto from '../Componentes/contexto'
import Contacto from '../Componentes/contacto'
import Navegador from '../Componentes/navegador'
import Juego from '../Componentes/juego'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Footer from '../Componentes/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navegador/>
    <Que/>
    <Contexto/>
    <Juego/>
    <Nosotros/>
    <Contacto/>
    <Footer/>

    </>
  )
}

export default App
