import React from 'react'

function Contexto() {
  return (
    <div>
        <div className="container">
        <section className="bg-section-2">
            <div className="row">
                <div className="col tainer">
                    <h1 id="contexto" className="text-center">Contexto</h1>
                    <div className="row d-flex gap-5 justify-content-center mt-5">
                        <div className="card col-5 carta" style={{width: "18rem"}}>
                            <div className="card-body card-p text-light  p-4">
                                <h5 className="card-title fs-2 text-center mb-4">Proyecto</h5>
                                <p className="card-text ">Isis es un proyecto enfocado en la salud humana y animal, que se creó con el fin de fomentar las buenas prácticas humanas con respecto a la tenencia de mascotas. Asimismo, trata la desinformación que existe respecto a este tema, buscando abarcar la mayor información posible para permitir al lector conocer e interesarse más sobre este; para ello, también, se creó un juego web que permitirá informarse de una forma didáctica. </p>
                            </div>
                        </div>
                        <div className="col-2 column2"></div>
                        <div className="card col-5 carta" style={{width: "18rem"}}>
                            <div className="card-body card-p text-light p-4">
                                <h5 className="card-title fs-2 text-center mb-4">Zoonótica</h5>
                                <p className="card-text">Se le conoce por zoonosis a un grupo de enfermedades o patógenos
                                    transmitido naturalmente de a animales a humanos. Estos pueden ser provocadas por
                                    virus, parásitos, hongos, entre otros; debido a la relación ya sea directa o
                                    indirecta con los animales.</p>
                                <a href="#" className="btm">Another link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        </div>

      
    </div>
  )
}

export default Contexto
