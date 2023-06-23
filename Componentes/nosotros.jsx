import React from 'react'

function Nosotros() {
  return (
    
    <div>
        <div className="container">
            
        <section>
        <div className="mb-5 mt-5 container">
            <h1 id="nosotros" className=" mt-5 text-center">Nosotros</h1>
            <div className="row bloque">
                <div className="col-6 text-center mt-5 center d-block">
                    <img className="imgNosotros text-center" src="./src/img/Camilo.png" alt="JuanCamilo"/>
                    <h2 className="text-center text-center mt-3 mb-3">Juan Camilo</h2>
                    <p>Estudiante de la entidad SENA, tiene 18 años de edad y se está formando en el área de producción multimedia, es el encargado de liderar el proyecto ISIS y se desempeña durante la creación en: Programación, ilustración, diseño y gestión.</p>
                </div>
                <div className="col-6 text-center mt-5 center d-block">
                    <img className="imgNosotros text-center" src="./src/img/Jose.png" alt="JuanCamilo"/>
                    <h2 className="text-center text-center mt-3 mb-3">Jose Manuel Alvarez</h2>
                    <p>Estudiante de la entidad SENA, tiene 18 años de edad y se está formando en el área de producción multimedia, se desempeña durante la creación del proyecto en: La parte del diseño visual, en lo audiovisual y en la ilustración.</p>
                </div>
            </div>
        </div>
    </section>
        </div>
      
    </div>
  )
}


export default Nosotros

