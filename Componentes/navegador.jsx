import React from 'react'

function Navegador() {


function scrollByAmount(amount) {
  const handleClick = () => {
    window.scrollBy({
      top: amount,
      behavior: 'smooth',
    });
  };

  return handleClick;
}




    return (
        <div>
            <div className="container">
                <div className="row ">
                    <div className="col-6">
                        <img className="bg-img" src="./src/img/Isis.png" alt="" />
                    </div>
                    <div className="col-6 d-flex justify-content-end  align-items-center">
                        <form className="d-flex" role="search">
                            <button className="btn-outline-success" type="submit">🔎</button>
                            <input className="" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                </div>
            </div>
            <nav className="nav bg-green gap-3 p-2 fs-5 d-flex justify-content-center align-items-center">
                <a className="nav-link" href="#">Inicio</a>
                <a className="nav-link" onClick={scrollByAmount(682)} href="#">Contexto</a>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Juego
                    </a>
                    <ul className="dropdown-menu menu-transition">
                        <li><a className="dropdown-item" onClick={scrollByAmount(1702)} href="#">Juego</a></li>
                        <li><a className="dropdown-item" onClick={scrollByAmount(2602)} href="#">Descripción</a></li>
                        <li><a className="dropdown-item" onClick={scrollByAmount(3320)} href="#">Personajes</a></li>
                    </ul>
                </li>
                <a className="nav-link" href="#nosotros">Nosotros</a>
            </nav>
        </div>


    )
}

export default Navegador
