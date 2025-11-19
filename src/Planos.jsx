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
                <div className="container">
                    <img src="#" alt="" />
                    <div className="sub_container">
                        <h2>Título do hero1</h2>
                        <p>Parágrafo</p>
                        <button>Assinar Freemium</button>
                    </div>
                </div>
            </section>

            <section className="planoDois"> 
                <div className="container">
                    <img src="#" alt="" />
                    <div className="sub_container">
                        <h2>Título do hero1</h2>
                        <p>Parágrafo</p>
                        <button>Assinar Freemium2</button>
                    </div>
                </div>
            </section>

            <section className="planoTres"> 
                <div className="container">
                    <img src="#" alt="" />
                    <div className="sub_container">
                        <h2>Título do hero1</h2>
                        <p>Parágrafo</p>
                        <button>Assinar Freemium3</button>
                    </div>
                </div>
            </section>
        </main>
        <Rodape/>
        </>
    )
}

export default Planos

