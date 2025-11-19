import React from "react";
import './App.jsx';
import Titulo from './components/Titulo.jsx'
import Rodape from './components/Rodape.jsx'

function Planos() {
    return(
        <>
        <Titulo/>
        <main>
            <h1>Nossos planos</h1>

            <section className="planoUm"> 
                <div className="">
                    <img src="" alt="" />
                    <div className="">
                        <h2></h2>
                        <p></p>
                    </div>
                </div>
            </section>

            <section className="planoDois"> 
                <div className="">
                    <img src="" alt="" />
                    <div className="">
                        <h2></h2>
                        <p></p>
                    </div>
                </div>
            </section>

            <section className="planoTres"> 
                <div className="">
                    <img src="" alt="" />
                    <div className="">
                        <h2></h2>
                        <p></p>
                    </div>
                </div>
            </section>
        </main>
        <Rodape/>
        </>
    )
}

export default Planos

