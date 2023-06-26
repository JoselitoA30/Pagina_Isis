import React from 'react'

function Juego(props) {
    return (
        <div>
            <section className="bg-section-3 mt-5">

                <div className="row">
                    <div className="col-12">
                        <h1 id="juego" className="mt-5 text-center text-light">{props.Juego}</h1>
                    </div>
                    <img className="mt-5 mb-5" src={props.entrada} alt="" srcSet="" />
                </div>

            </section>

        </div>
    )
}

export default Juego
