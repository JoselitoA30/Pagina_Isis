import React from 'react'

function Footer() {

    function scrollToTop() {
        const handleClick = () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        };
      
        return handleClick;
      }

    
    return (
        


        <div>
            <section className="footer">
                <div className="container">
                    <img src="./src/img/Logo.png" className="m0-a" />
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-1 m0-a">
                            <img className="m0-a" src="./src/img/FB.png" alt="" />
                        </div>
                        <div className="col-1  m0-a">
                            <img className="m0-a" src="./src/img/IG.png" alt="" />
                        </div>
                        <div className="col-1  m0-a">
                            <img className="m0-a" src="./src/img/GM.png" alt="" />
                        </div>
                        <div className="col-1 m0-a">
                            <img className="m0-a" src="./src/img/WH.png" alt="" />
                        </div>
                        <div className="col-4"></div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <a href="#" className="text-center font">Terminos y condiciones</a>
                        </div>
                    </div>
                </div>
                <button onClick={scrollToTop()} className="floating-button">↑</button>
            </section>

        </div>
    )
}

export default Footer
