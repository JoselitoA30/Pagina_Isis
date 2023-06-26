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
    <Navegador Isis="./src/img/Isis.png"/>
    <Que titulo="¿Que es ISIS?"/>
    <Contexto leerMas="Leer Mas"/>
    <Juego Juego="Juego 🎮" entrada="./src/img/Cientificosenapuros.png"/>
    <Nosotros Jose="Estudiante de la entidad SENA, tiene 18 años de edad y se está formando en el área de producción multimedia, se desempeña durante la creación del proyecto en: La parte del diseño visual, en lo audiovisual y en la ilustración." Camilo="Estudiante de la entidad SENA, tiene 18 años de edad y se está formando en el área de producción multimedia, es el encargado de liderar el proyecto ISIS y se desempeña durante la creación en: Programación, ilustración, diseño y gestión."/>
    <Contacto boton="Enviar"/>
    <Footer subir="↑"/>

    </>
  )
}

export default App
