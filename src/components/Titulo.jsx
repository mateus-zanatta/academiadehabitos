import React from "react";

export default function Titulo() {
    return(
        <>
        <header className="">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-3 md:gap-7 mt-2 mb-2">
            <img src="/logo_mobile.png" alt="logo(mobile)" className="logo md:hidden h-[100px]" />
            <img src="/logo_desktop.png" alt="logo(desktop)" className="hidden md:block logo h-[50px]" />
            <nav>
                <ul className="flex flex-col md:flex-row items-start md:items-center justify-center mt-2 mb-10 md:gap-24 font-semibold md:text-2xl md:mt-8">
                    <li className=""><a href="inicio.html">Início</a></li>
                    <li className=""><a href="nossoapp.html">Nosso aplicativo</a></li>
                    <li className=""><a href="feed.html">Feed do blog</a></li>
                    <li className=""><a href="servicos.html">Serviços</a></li>
                    <li className=""><a href="mais.html">Mais</a></li>
                </ul>
            </nav>
                <button className="rounded-xl w-40 md:w-30 border-2 bg-[#ec7c31ba] hover:bg-[#EC7D31] cursor-pointer">Junte-se a nós</button>
        </div>
<hr/>
    </header>
    </>
    )
}