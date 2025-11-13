import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header className="">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-3 md:gap-7 mt-2 mb-2">
          <img src="/logo_mobile.png" alt="logo(mobile)" className="logo md:hidden h-[100px]" />
          <img src="/logo_desktop.png" alt="logo(desktop)" className="hidden md:block logo h-[50px]" />
          <h1 className="text-4xl md:text-6xl font-bold text-center">Crie rotinas, Conquiste o futuro!</h1>
          <button className="rounded-xl w-40 md:w-30 border-2 bg-[#ec7c31ba] hover:bg-[#EC7D31] cursor-pointer">Junte-se a nós</button>
        </div>
        <hr />
        <nav>
          <ul className="flex flex-col md:flex-row items-start md:items-center justify-center mt-2 mb-10 md:gap-24 font-semibold md:text-2xl md:mt-8">
            <li className=""><a href="inicio.html">Início</a></li>
            <li className=""><a href="nossoapp.html">Nosso aplicativo</a></li>
            <li className=""><a href="feed.html">Feed do blog</a></li>
            <li className=""><a href="servicos.html">Serviços</a></li>
            <li className=""><a href="mais.html">Mais</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className='m-5 md:m-15 md:mt-20 flex flex-col md:grid md:grid-cols-2 gap-4'>
          <div className='flex justify-center'>
            <img src="/menina.png" alt="" className='w-150 md:h-100' />
          </div>
          <div className='flex flex-col justify-center items-center gap-10'>
            <h3 className='text-center text-2xl md:text-5xl md:text-end font-bold'>Transformando rotinas diárias em uma jornada divertida e recompensadora.</h3>
            <button className="md:mt-40 rounded-xl w-40 border-2 bg-[#ec7c31ba] hover:bg-[#EC7D31] cursor-pointer">Saiba mais</button>
          </div>
        </section>
        <section className='mt-10 flex flex-col items-center justify-center gap-5'>
          <h1 className='text-2xl md:text-5xl font-semibold md:mb-4'>Serviços</h1>
          <div className='flex flex-col md:grid md:grid-cols-3 gap-15 md:gap-25'>
            <div className='border-2 p-6 rounded-xl'>
              <h1 className='text-center font-bold text-2xl'>Consultoria Familiar</h1>
              <hr />
              <p className='font-semibold text-xl mt-2'>R$60,00</p>
              <button className="mt-2 rounded-xl w-60 border-2 bg-[#ec7c31ba] hover:bg-[#EC7D31] cursor-pointer">Agendar</button>
            </div>
            <div className='border-2 p-6 rounded-xl'>
              <h1 className='text-center font-bold text-2xl'>Reforço Escolar</h1>
              <hr />
              <p className='font-semibold text-xl mt-2'>R$60,00</p>
              <button className="mt-2 rounded-xl w-60 border-2 bg-[#ec7c31ba] hover:bg-[#EC7D31] cursor-pointer">Agendar</button>
            </div>
            <div className='border-2 p-6 rounded-xl'>
              <h1 className='text-center font-bold text-2xl'>Gestão de Rotina</h1>
              <hr />
              <p className='font-semibold text-xl mt-2'>R$60,00</p>
              <button className="mt-2 rounded-xl w-60 border-2 bg-[#ec7c31ba] hover:bg-[#EC7D31] cursor-pointer">Agendar</button>
            </div>
          </div>
        </section>
        <section className='m-5 md:m-15 md:mt-20 flex flex-col md:grid md:grid-cols-2 gap-4'>
          <div className='flex flex-col justify-center items-center gap-10'>
            <h1 className='text-center text-2xl md:text-5xl md:text-end font-bold mt-10'>sobre</h1>
            <p className='text-justify font-semibold'>Academia de Hábitos é uma plataforma inovadora que busca revolucionar a forma como crianças e adolescentes encaram suas rotinas. Com a missão de tornar tarefas diárias e estudos divertidos, combinando responsabilidade e autonomia, nosso aplicativo oferece um ambiente gamificado para gestão de rotinas familiares e reforço academifo. Os pais podem criar rotinas e recompensas, enquanto as crianças realizam missões e acumulam pontos, sempre com segurança e respeito à privacidade dos dados.</p>
            <button className="md:mt-2 rounded-xl w-40 border-2 bg-[#ec7c31ba] hover:bg-[#EC7D31] cursor-pointer">Conheça mais</button>
          </div>
          <div className='flex justify-center'>
            <img src="/mission.png" alt="" className='w-150 md:h-100 mt-2' />
          </div>
        </section>
      </main>
      <footer className='hidden md:block'>
        <h1>Academia de Hábitos - RESPONSIVO</h1>
        <h3>Transformando Rotinas com Diversão</h3>
      </footer>
      <footer className='md:hidden '>
        <h1>Academia de Hábitos</h1>
        <h3>Transformando Rotinas com Diversão</h3>
      </footer>
    </>
  );
}

export default App;