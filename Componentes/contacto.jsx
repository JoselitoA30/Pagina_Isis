import React from 'react'

function Contacto() {
    return (
        <div>
            <div className="container">

                <section>


                    <div className="row margin-b">

                        <h2 className="text-center ">Contactanos</h2>

                        <div className="col-6 m0-a">
                            <form className="row g-3">
                                <div className="col-md-12">
                                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="row g-3">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Primer nombre" aria-label="First name" />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Segundo nombre" aria-label="Last name" />
                                    </div>
                                </div>
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                                    <label htmlFor="floatingTextarea2">Comentarios</label>
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                                        <label className="form-check-label" htmlFor="gridCheck">
                                            Check me out
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12 mb-3">
                                    <button type="submit" className="butt-form btn btn-primary">Sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </section>

            </div>
        </div>
    )
}

export default Contacto
